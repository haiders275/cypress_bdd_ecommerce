import pico from 'picocolors'
import path from 'path';
import { writeFile } from '../fs/fs';

export let createRedirect = async ({
  options,
  redirectPage,
  homePage,
}) => {
  if (options.isRedirectEnabled) {
    let parent = options.output.replace(/\/$/, ''); //trim any trailing slash
    parent = parent.split(path.sep).slice(-1).pop(); //get name of final directory in the path
    let homepage = homePage;
    homepage =
      homepage.source.substr(0, homepage.source.lastIndexOf('.')) + '.html';
    let redirectLink = parent + '/' + homepage;
    let $ = redirectPage;
    $('a').attr('href', redirectLink);
    $('meta[http-equiv=REFRESH]').attr('content', '0;url=' + redirectLink);
    let file = options.output + '../' + 'index.html';
    try {
      await writeFile(file, $.html());
    } catch (error) {
      console.log(pico.red('Error writing redirect file: ' + file));
      if (options.verbose === true) {
        console.log(pico.red(error));
      }
      //don't exit because redirect error is not a fatal error
    }
  }
};
