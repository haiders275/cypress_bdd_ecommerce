import pico from 'picocolors'
import { readFile } from "./fs";
import { validateJSON } from "../validation/validation";
import type { Meta } from '../types';

export const loadMeta = async ({
  inputPath,
  verbose,
  mainProcess
}): Promise<Meta> => {
  const meta = {
    parameters: null,
    contents: null,
  };
  console.log(pico.green('Loading required JSON metadata files'));
  try {
    let files = {
      parameters: await readFile(inputPath + '/parameters.json'),
      contents: await readFile(inputPath + '/contents.json'),
    };
    for (let key in files) {
      if (files.hasOwnProperty(key)) {
        try {
          let file = JSON.parse(files[key]);
          if (validateJSON({ key, data: file, verbose })) {
            meta[key] = file;
          } else {
            mainProcess.exit(1);
          }
        } catch (error) {
          console.log(
            pico.red(
              'Error parsing required file: ' + key + '.json (invalid JSON)',
            ),
          );
          if (verbose === true) {
            console.log(pico.red(error));
          }
          mainProcess.exit(1);
        }
      }
    }
    //add the release notes to the contents list
    const extra = {
      heading: 'Extra',
      column: 5,
      pages: [{ title: 'Release notes', source: 'release-notes.md' }],
    };
    meta.contents.push(extra);
    return {
      rawParameters: meta.parameters,
      contents: meta.contents
    };
  } catch (error) {
    console.log(pico.red('Error loading required JSON metadata files'));
    if (verbose === true) {
      console.log(pico.red(error));
    }
    mainProcess.exit(1);
  }
};
