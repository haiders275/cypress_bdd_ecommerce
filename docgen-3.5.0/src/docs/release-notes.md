## DocGen 3.5.0 04/12/2023

- modernise view code (use React templates)

## DocGen 3.4.0 06/11/2023

- modernise code (convert to TypeScript and split into modules)

## DocGen 3.3.1 19/10/2023

- remove legacy rsvp package that's not needed in modern JavaScript/TypeScript

## DocGen 3.3.0 16/10/2023

- start refactoring to TypeScript

## DocGen 3.2.14 04/10/2023

- rebrand actions (button style updates)

## DocGen 3.2.13 03/10/2023

- docs website: add Inkit sponsorship links to header

## DocGen 3.2.12 28/09/2023

- fix deprecated MathJax CDN ([#77](https://github.com/mtmacdonald/docgen/issues/77))

## DocGen 3.2.10 - 3.2.11 28/09/2023

- improve and modernise docs (website)

## DocGen 3.2.4 - 3.2.9 27/09/2023

- refactor directory structure to better suit build process
- fix path resolution error in released build

## DocGen 3.2.3 26/09/2023

- fix missing build artefacts from the published NPM package ([#67](https://github.com/mtmacdonald/docgen/issues/67))

## DocGen 3.2.2 25/09/2023

- fix corrupted character / encoding issue in PDF footer ([#57](https://github.com/mtmacdonald/docgen/issues/57))

## DocGen 3.2.1 25/09/2023

- support SVG brand icons

## DocGen 3.2.0 21/09/2023

- update website with rebrand and sponsorship

## DocGen 3.1.0 - 3.1.3 05/09/2023

- removed dependency on Webknife CSS framework, ported styles directly to this repo

## DocGen 3.0.7 - 3.0.8 07/07/2023

- automated Github CI/CD for tagging a release

## DocGen 3.0.5 - 3.0.6 released 05/07/2023

- automated Github CI/CD pipeline for publishing the NPM package

## DocGen 3.0.1 - 3.0.4 released 30/06/2023

- automated Github CI/CD pipeline for publishing the docs website
- modernised the build tooling (TypeScript compiler)
- publish only the dist directory to the NPM package
- better NPM commands for developing and maintaining the repository
- docs directory is now produced in a build step (build output is no longer committed)

## DocGen 3.0.0 released 24/06/2023

- Ownership and copyright transferred to project sponsor [Inkit Inc](https://www.inkit.com/)
- License remains open-source MIT

## DocGen 2.1.3 released 29/05/2015

- Allow more protocols in CommonMark links (see markdown-it [ticket #108](https://github.com/markdown-it/markdown-it/issues/108))

## DocGen 2.1.2 released 28/05/2015

- Fixed a regression defect (exception when running docgen scaffold) that first appeared in DocGen 2.1.0

## DocGen 2.1.1 released 28/05/2015

- Upgraded all node dependencies to the latest versions
- Upgraded styles to the latest release of Webknife (1.4.0)

## DocGen 2.1.0 released 27/05/2015

- Added a command-line option for specifying a custom path to wkhtmltopdf

## DocGen 2.0.1 released 31/03/2015

- Fixed the node package and user guide for installing with npm install -g

## DocGen 2.0.0 released 31/03/2015

- DocGen is now open source
- Rewritten in JavaScript for Node.js
- Much easier to install (hosted on npm)
- Dependencies are now version controlled (using npm)
- Modernized visual style (uses Webknife CSS framework)
- Input metadata files are now in JSON rather than YAML format
- Top-level page headings are now inserted automatically (from contents.json)
- The web and PDF tables of contents both correspond to contents.json
- Command-line options are now used for configuration, rather than a config file
- Command-line output is now color coded (green success, red error)
- Added usage information to the command line interface
- Generating the PDF is now an optional feature
- Upgraded to the latest version of the PDF generator (wkhtmltopdf)
- Added support for mathematical expressions (with KaTex or MathJax)
- Added support for a list of document contributors (for multiple authors)
- Added support for a header link back to the application (integrated docs)
- Added time to the generation timestamp
- Renamed 'change log' to 'release notes'
- Fixed issues with fonts and text kerning in the PDF copy
- Fixed defect where unexpected text appeared on some pages with a page table of contents
- Dropped support for Internet Explorer 7 and 8
- Dropped formal support for tool to run on multiple operating systems
- Removed support for 'Mark of the Web'

## DocGen 1.0.1 released 18/01/2012

- Fixed a bug causing the table of contents headings to sometimes appear in the wrong order

## DocGen 1.0.0 released 04/11/2011

- Ruby implementation (not released as open source)
- Creates a static website from Markdown input files
- Also creates a PDF copy using wkhtmltopdf