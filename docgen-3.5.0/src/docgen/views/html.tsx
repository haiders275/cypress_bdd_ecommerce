import React from 'react';
import ReactDOMServer from 'react-dom/server';

export const toHTML = (component) => {
  return ReactDOMServer.renderToStaticMarkup(component);
};
