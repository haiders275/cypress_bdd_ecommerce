import pico from 'picocolors'
import path from 'path';
import { cleanDirectory } from "./fs/fs";
import { loadMeta } from './fs/meta';
import { loadTemplates } from './fs/templates';
import { loadMarkdown } from './fs/markdown';
import { checkPdfVersion, generatePdf } from './pdf/wkhtmltopdf/wkhtmltopdf';
import { scaffold } from './scaffold/scaffold';
import { sortPages } from './meta/sort-pages';
import { deriveParameters } from './meta/derive-parameters';
import { processPages } from './views/pages/process-pages';
import { writePages } from './fs/write-pages';
import { createRedirect } from './views/redirect';
import { version } from '../../package.json';

import type {
  Options,
} from './types';

export function DocGen(process) {
  let mainProcess = process;
  let options;

  this.getVersion = () => {
    return version;
  };

  this.setOptions = (userOptions: Options) => {
    options = userOptions;
    //all user-specified paths must be normalized
    if (options.input) {
      options.input = path.normalize(options.input + '/');
    }
    if (options.output) {
      options.output = path.normalize(options.output + '/');
    }

    //wkhtmltopdf path does not need a trailing slash
    if (options.wkhtmltopdfPath && options.wkhtmltopdfPath !== '') {
      options.wkhtmltopdfPath = path.normalize(options.wkhtmltopdfPath);
    }
  };

  /*
    copy the example src files (template) to any directory, when scaffold command is invoked
  */

  this.scaffold = async () =>
    scaffold({
      outputDirectory: options.output,
      verbose: options.verbose === true,
    });

  this.run = async () => {
    console.log(pico.green(pico.bold('DocGen version ' + version)));
    //delete and recreate the output directory
    await cleanDirectory(options.output, options.verbose);
    const templates = await loadTemplates({
      options,
      mainProcess,
    });
    const {contents, rawParameters} = await loadMeta({
      inputPath: options.input,
      verbose: options.verbose,
      mainProcess,
    });
    const sortedPages = sortPages({ contents });
    const parameters = deriveParameters({
      rawParameters,
      setVersion: options.setVersion,
      setReleaseDate: options.setReleaseDate,
      homeLink: contents[0].pages[0],
    });
    const pages = await loadMarkdown({
      options,
      contents,
      mainProcess,
    });
    const hydratedPages = await processPages({
      templates,
      pages,
      sortedPages,
      parameters,
      options,
      contents,
    });
    await writePages({
      options,
      contents,
      hydratedPages,
      mainProcess,
    });
    await createRedirect({
      options,
      redirectPage: hydratedPages.redirect,
      homePage: contents[0].pages[0],
    });
    if (options.pdf === true) {
      await checkPdfVersion({ options, mainProcess });
      await generatePdf({
        options,
        parameters,
        sortedPages,
        mainProcess
      });
    } else {
      console.log(pico.green(pico.bold('Done!')));
    }
  };
}
