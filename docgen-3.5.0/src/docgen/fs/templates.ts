import pico from 'picocolors'
import cheerio from 'cheerio';
import { readFile } from './fs';
import type { Templates } from '../types';

export const loadTemplates = async ({
  options,
  mainProcess
}): Promise<Templates> => {
  const templates = {};
  console.log(pico.green('Loading templates'));
  try {
    let files = {
      main: await readFile(__dirname + '/../../include/templates/main.html'),
      redirect: await readFile(
        __dirname + '/../../include/templates/redirect.html',
      ),
      webCover: await readFile(
        __dirname + '/../../include/templates/webCover.html',
      ),
      pdfCover: await readFile(
        __dirname + '/../../include/templates/pdfCover.html',
      ),
      pdfHeader: await readFile(
        __dirname + '/../../include/templates/pdfHeader.html',
      ),
      pdfFooter: await readFile(
        __dirname + '/../../include/templates/pdfFooter.html',
      ),
    };
    for (let key in files) {
      if (files.hasOwnProperty(key)) {
        let file = files[key];
        let dom = cheerio.load(file);
        templates[key] = dom;
      }
    }
    return templates;
  } catch (error) {
    console.log(pico.red('Error loading templates'));
    if (options.verbose === true) {
      console.log(pico.red(error));
    }
    mainProcess.exit(1);
  }
};
