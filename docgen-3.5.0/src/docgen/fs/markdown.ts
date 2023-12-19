import pico from 'picocolors'
import { readFile } from "./fs";
import MarkdownIt from 'markdown-it';

const markdown = new MarkdownIt('commonmark').enable('table');

//Allow CommonMark links that use other protocols, such as file:///
//The markdown-it implementation is more restrictive than the CommonMark spec
//See https://github.com/markdown-it/markdown-it/issues/108
markdown.validateLink = () => {
  return true;
};

export const loadMarkdown = async ({
  contents,
  options,
  mainProcess,
}) => {
  console.log(pico.green('Loading src files'));
  const pages = {};
  try {
    let keys = [];
    let files = [];
    contents.forEach((section) => {
      section.pages.forEach((page) => {
        keys.push(page);
        files.push(options.input + '/' + page.source);
      });
    });
    //add the release notes page
    keys.push('ownership');
    files.push(options.input + '/release-notes.md');
    files = await Promise.all(files.map((f) => readFile(f)));
    files.forEach((page, index) => {
      let key = keys[index];
      try {
        if (key.html === true) {
          //allow raw HTML input pages
          pages[key.source] = page;
        } else {
          //otherwise parse input from Markdown into HTML
          let html = markdown.render(page);
          pages[key.source] = html;
        }
      } catch (error) {
        console.log(pico.red('Error parsing Markdown file: ' + key.source));
        if (options.verbose === true) {
          console.log(pico.red(error));
        }
        mainProcess.exit(1);
      }
    });
    return pages;
  } catch (error) {
    console.log(error);
    console.log(pico.red('Error loading src files'));
    if (options.verbose === true) {
      console.log(pico.red(error));
    }
    mainProcess.exit(1);
  }
};