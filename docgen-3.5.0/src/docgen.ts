#!/usr/bin/env node

import { program } from 'commander';
import { DocGen } from './docgen/docgen';

const generator = new DocGen(process);

const scaffold = (command) => {
  generator.setOptions(command);
  generator.scaffold();
};

const run = (command) => {
  generator.setOptions(command);
  generator.run();
};

/*
    parse command-line arguments with node commander
        commander help: http://slides.com/timsanteford/conquering-commander-js
        command-line conventions: http://docopt.org
*/

program.version(generator.getVersion()).usage('[command] [--option]');

program
  .command('scaffold')
  .usage('[--option]')
  .description('create a template input directory')
  .option(
    '-o, --output [path]',
    'path to the output directory (default: ./)',
    './',
  )
  .option('-v, --verbose', 'show verbose output including detailed errors')
  .action((command) => {
    scaffold(command);
  });

program
  .command('run')
  .usage('[--option]')
  .description('create a static website from an input directory')
  .option(
    '-i, --input [path]',
    'path to the input directory [default: ./]',
    './',
  )
  .option(
    '-o, --output [path]',
    'path to the output directory [default: ./output]',
    './output',
  )
  .option('-v, --verbose', 'show verbose output including detailed errors')
  .option(
    '-t, --page-toc',
    'show a page table of contents at the top of each web page',
  )
  .option('-p, --pdf', 'create a PDF document')
  .option(
    '-d, --pdf-delay [milliseconds]',
    'delay PDF printing to allow time for dynamic rendering [default: 2000]',
    '2000',
  )
  .option('-m, --math-katex', 'enable KaTex mathematical expressions')
  .option('-n, --math-mathjax', 'enable MathJax mathematical expressions')
  .option(
    '-r, --redirect',
    'create an index.html in the parent directory that redirects to the homepage',
  )
  .option(
    '-s, --set-version [version]',
    'override parameters.version (useful for build tools) [default: false]',
    false,
  )
  .option(
    '-R, --set-release-date [date]',
    'override parameters.date (useful for build tools) [default: false]',
    false,
  )
  .option(
    '-w, --wkhtmltopdf-path [path]',
    'specify a custom path to wkhtmltopdf [default: wkhtmltopdf]',
    'wkhtmltopdf',
  )
  .action((command) => {
    run(command);
  });

program.parse(process.argv);

//if no arguments were provided, show help and then exit
if (!process.argv.slice(2).length) {
  program.help();
}
