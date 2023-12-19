This section gives help on solving common issues with DocGen.

## Displaying detailed errors

Pass the **-v** (verbose) option when running DocGen to get more detailed error messages.

## PDF missing content

In complex pages, the PDF generator (wkhtmltopdf) needs to be given enough time for dynamic content to be rendered.
Pass the **-d [milliseconds]** option to increase the rendering time for each page, if required.

## PDF layouts

The PDF generator [wkhtmltopdf](https://wkhtmltopdf.org/) uses an older version of the Webkit browser engine than the
engine in most modern browsers. Not all modern CSS features like grid and flexbox work, unfortunately. This only
impacts the PDF output, not the website.

## Attached files not in PDF

Attached files are not converted to PDF, only the web content is. The website and PDF can link to other files.

## Corrupted text characters

Make sure all the input text files are saved with UTF-8 encoding.

## Missing logo

The logo must be in SVG or PNG formats and saved with the path *files/images/logo.svg* or *files/images/logo.png*. It
must have suitable dimensions for the header (height and width).

## Other issues

For any other problems, please submit a [an issue ticket](https://github.com/mtmacdonald/docgen/issues).
