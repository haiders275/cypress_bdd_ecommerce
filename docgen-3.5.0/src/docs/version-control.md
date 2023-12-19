One of the benefits of using DocGen for product software documentation is that its plain text source files are easy to 
version control using any modern version control tool such as [git](https://git-scm.com/).

## Recommended practice

It is recommended to store the documentation **source files** (DocGen input directory) in the same version control 
repository as its parent project. For example, if you are using DocGen to document a software product, each release
of the software app can then have a matching documentation version.

> It is not necessary to version control the DocGen output, because this can always be regenerated.
