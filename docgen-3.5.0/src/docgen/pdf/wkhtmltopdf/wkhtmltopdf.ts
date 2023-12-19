import pico from 'picocolors'
import { Spinner as cliSpinner } from 'cli-spinner';
import { execute } from "../../execute/execute";
import { spawn } from "child_process";
import { removeDirectory } from "../../fs/fs";
import spawnArgs from 'spawn-args';

const wkhtmltopdfVersion = 'wkhtmltopdf 0.12.6 (with patched qt)'; //output from wkhtmltopdf -V

const pdfOptions = [
  ' --zoom 1.0',
  ' --image-quality 100',
  ' --print-media-type',
  ' --orientation portrait',
  ' --page-size A4',
  ' --margin-top 25',
  ' --margin-right 15',
  ' --margin-bottom 16',
  ' --margin-left 15',
  ' --header-spacing 5',
  ' --footer-spacing 5',
  ' --no-stop-slow-scripts',
];

const getPdfArguments = ({
  parameters,
  options,
  sortedPages
}) => {
  let pdfName = parameters.name.toLowerCase() + '.pdf';
  pdfOptions.push(' --enable-local-file-access');
  pdfOptions.push(' --javascript-delay ' + options.pdfDelay); //code syntax highlight in wkhtmltopdf 0.12.2.1 fails without a delay (but why doesn't --no-stop-slow-scripts work?)
  pdfOptions.push(
    ' --user-style-sheet ' + __dirname + '/../../../include/pdf-stylesheet.css',
  );
  pdfOptions.push(' --header-html ' + options.output + 'temp/pdfHeader.html');
  pdfOptions.push(' --footer-html ' + options.output + 'temp/pdfFooter.html');
  pdfOptions.push(' cover ' + options.output + 'temp/pdfCover.html');
  pdfOptions.push(
    ' toc --xsl-style-sheet ' + __dirname + '/../../../include/pdf-contents.xsl',
  );
  let allPages = '';
  for (let key in sortedPages) {
    if (sortedPages.hasOwnProperty(key)) {
      sortedPages[key].forEach((section) => {
        section.pages.forEach((page) => {
          let key = page.source;
          let name = key.substr(0, page.source.lastIndexOf('.'));
          let path = options.output + name + '.html';
          allPages += ' ' + path;
        });
      });
    }
  }
  let args = pdfOptions.join('');
  args += allPages;
  args += ' ' + options.output + pdfName;
  return spawnArgs(args);
};

export const checkPdfVersion = async ({options, mainProcess}) => {
  try {
    const {stdout} = await execute(options.wkhtmltopdfPath + ' -V');
    //warn if the version of wkhtmltopdf is not an expected version
    const actualWkhtmltopdfVersion = stdout.trim();
    if (actualWkhtmltopdfVersion !== wkhtmltopdfVersion) {
      const warning =
        'Warning: unexpected version of wkhtmltopdf, which may work but is not tested or supported';
      const expectedVersion = '   expected version: ' + wkhtmltopdfVersion;
      const detectedVersion =
        '   detected version: ' + actualWkhtmltopdfVersion;
      console.log(pico.yellow(warning));
      console.log(pico.yellow(expectedVersion));
      console.log(pico.yellow(detectedVersion));
    }
  } catch (error) {
    console.log(
      pico.red(
        'Unable to call wkhtmltopdf. Is it installed and in path? See http://wkhtmltopdf.org',
      ),
    );
    if (options.verbose === true) {
      console.log(pico.red(error));
    }
    mainProcess.exit(1);
  }
};

/*
  call wkhtmltopdf as an external executable
*/

export const generatePdf = async ({
  options,
  parameters,
  sortedPages,
  mainProcess
}) => {
  console.log(pico.green('Creating the PDF copy (may take some time)'));
  let args = getPdfArguments({options, parameters, sortedPages});
  let wkhtmltopdf = spawn(options.wkhtmltopdfPath, args);
  let spinner = new cliSpinner(pico.green('   Processing... %s'));
  spinner.setSpinnerString('|/-\\');

  wkhtmltopdf.on('error', (error) => {
    console.log(pico.red('Error calling wkhtmltopdf to generate the PDF'));
    if (options.verbose === true) {
      console.log(pico.red(error.message));
    }
  });

  if (options.verbose !== true) {
    spinner.start(); //only show spinner when verbose is off (otherwise show raw wkhtmltopdf output)
  } else {
    //pipe the output from wkhtmltopdf back to stdout
    //however, wkhtmltpdf outputs to stderr, not stdout. See:
    //https://github.com/wkhtmltopdf/wkhtmltopdf/issues/1980
    wkhtmltopdf.stderr.pipe(mainProcess.stdout);
  }

  wkhtmltopdf.stdout.on('data', (data) => {
    //do nothing
  });

  wkhtmltopdf.stderr.on('data', (data) => {
    //do nothing
  });

  wkhtmltopdf.on('close', async (code) => {
    if (options.verbose !== true) {
      spinner.stop();
      console.log(''); //newline after spinner stops
    }
    if (code !== 0) {
      let warning =
        'wkhtmltopdf exited with a warning or error: try the -v option for details';
      console.log(pico.yellow(warning));
    }
    await removeDirectory(options.output + 'temp', options.verbose);
    console.log(pico.green(pico.bold('Done!')));
  });
};
