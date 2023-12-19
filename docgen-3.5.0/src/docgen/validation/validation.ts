import schemaValidator from 'z-schema';
import pico from 'picocolors'

const schemas = {
  parameters: {
    title: 'DocGen Parameters Schema',
    type: 'object',
    required: [
      'title',
      'name',
      'version',
      'date',
      'organization',
      'author',
      'owner',
      'contributors',
      'website',
      'module',
      'id',
      'summary',
      'marking',
      'legalese',
    ],
    properties: {
      title: { type: 'string' },
      name: { type: 'string' },
      version: { type: 'string' },
      date: { type: 'string' },
      organization: {
        type: 'object',
        required: ['name', 'url'],
        properties: {
          name: { type: 'string' },
          url: { type: 'string' },
        },
      },
      author: {
        type: 'object',
        required: ['name', 'url'],
        properties: {
          name: { type: 'string' },
          url: { type: 'string' },
        },
      },
      owner: {
        type: 'object',
        required: ['name', 'url'],
        properties: {
          name: { type: 'string' },
          url: { type: 'string' },
        },
      },
      contributors: {
        type: 'array',
        items: {
          oneOf: [
            {
              type: 'object',
              required: ['name', 'url'],
              properties: {
                name: { type: 'string' },
                url: { type: 'string' },
              },
            },
          ],
        },
      },
      website: {
        type: 'object',
        required: ['name', 'url'],
        properties: {
          name: { type: 'string' },
          url: { type: 'string' },
        },
      },
      sponsorLink: {
        type: 'object',
        required: ['name', 'url', 'logo'],
        properties: {
          name: { type: 'string' },
          url: { type: 'string' },
          logo: { type: 'string' },
        },
      },
      backlink: {
        type: 'object',
        required: ['name', 'url'],
        properties: {
          name: { type: 'string' },
          url: { type: 'string' },
        },
      },
      module: { type: 'string' },
      id: { type: 'string' },
      summary: { type: 'string' },
      marking: { type: 'string' },
      legalese: { type: 'string' },
      logoPath: { type: 'string' },
    },
  },
  contents: {
    title: 'DocGen Table of Contents Schema',
    type: 'array',
    items: {
      oneOf: [
        {
          type: 'object',
          required: ['heading', 'column', 'pages'],
          properties: {
            name: { type: 'string' },
            column: { type: 'integer', minimum: 1, maximum: 4 },
            pages: {
              type: 'array',
              items: {
                oneOf: [
                  {
                    type: 'object',
                    required: ['title', 'source'],
                    properties: {
                      title: { type: 'string' },
                      source: { type: 'string' },
                      html: { type: 'boolean' },
                    },
                  },
                ],
              },
            },
          },
        },
      ],
    },
  },
};

export const validateJSON = ({key, data, verbose}) => {
  let schema = schemas[key];
  let validator = new schemaValidator({});
  let valid = validator.validate(data, schema);
  if (!valid) {
    console.log(
      pico.red(
        `Error parsing required file: ${key}.json (failed schema validation)`
      ),
    );
    if (verbose === true) {
      console.log(pico.red(validator.getLastError().message));
    }
  }
  return valid;
};
