import CheerioAPI from 'cheerio';
export type TCheerioAPI = typeof CheerioAPI;

export type Options = {
  input: string; // inputPath
  output: string; // outputPath
  wkhtmltopdfPath: string; // path to wkhtmltopdf
  verbose: boolean;
  pdf: boolean; // whether to generate PDF
  setVersion: boolean;
  setReleaseDate: boolean;
  mathMathjax: boolean;
  mathKatex: boolean;
  pageToc: boolean;
  redirect: boolean;
};

export type rawParameters = {
  title: string,
  name: string,
  version: string,
  date: string,
  organization: {
    name: string,
    url: string
  },
  author: {
    name: string,
    url: string
  },
  owner: {
    name: string,
    url: string
  },
  contributors: [
    {
      name: string,
      url: string
    }
  ],
  website: {
    name: string,
    url: string
  },
  sponsorLink?: {
    name: string,
    url: string,
    logo: string
  },
  backlink?: {
    name: string,
    url: string
  },
  module?: string,
  id?: string,
  summary: string,
  marking?: string,
  legalese?: string
  logoPath?: string
};

export type Parameters = rawParameters & {
  attribution: string,
  year: string
};

export type Content = {
  name: string,
  column: number,
  pages: [
    {
      title: string,
      source: string,
      html: boolean,
    }
  ]
};

export type Meta = {
  contents?: Content[];
  rawParameters?: Parameters;
};

export type Templates = {
  main?: string|TCheerioAPI,
  redirect?: string|TCheerioAPI,
  webCover?: string|TCheerioAPI,
  pdfCover?: string|TCheerioAPI,
  pdfHeader?: string|TCheerioAPI,
  pdfFooter?: string|TCheerioAPI,
};