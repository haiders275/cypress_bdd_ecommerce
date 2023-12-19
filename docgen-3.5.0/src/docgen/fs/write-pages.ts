import pico from 'picocolors'
import { copyDirectory, makeDirectory, writeFile } from "./fs";

export const writePages = async ({
  options,
  hydratedPages,
  contents,
  mainProcess,
}) => {
  console.log(pico.green('Writing the web page files'));
  try {
    const promises = contents.flatMap((section) =>
      section.pages.map((page) => {
        const key = page.source;
        const name = key.substr(0, page.source.lastIndexOf('.'));
        const path = options.output + name + '.html';
        const html = hydratedPages.pages[key];
        return writeFile(path, html);
      })
    );
    await Promise.all(promises);
    //add extra files
    await writeFile(
      options.output + 'ownership.html',
      hydratedPages.webCover,
    );
    if (options.pdf) {
      let pdfTempDir = options.output + 'temp/';
      await makeDirectory(pdfTempDir);
      await writeFile(
        pdfTempDir + 'pdfCover.html',
        hydratedPages.pdfCover,
      );
      await writeFile(
        pdfTempDir + 'pdfHeader.html',
        hydratedPages.pdfHeader,
      );
      await writeFile(
        pdfTempDir + 'pdfFooter.html',
        hydratedPages.pdfFooter,
      );
    }
    await copyDirectory(
      __dirname + '/../../include/require',
      options.output + 'require',
      options.verbose,
    ); //CSS, JavaScript
    await copyDirectory(
      options.input + 'files',
      options.output + 'files',
      options.verbose,
    ); //user-attached files and images
    if (options.mathKatex === true) {
      await copyDirectory(
        __dirname + '/../../include/optional/katex',
        options.output + 'require/katex',
        options.verbose,
      );
    }
  } catch (error) {
    console.log(pico.red('Error writing the web page files'));
    if (options.verbose === true) {
      console.log(pico.red(error));
    }
    mainProcess.exit(1);
  }
};