import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import App from '../shared/app';

export function serverRenderer(req, context, data) {
  const markup = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App data={data} />
    </StaticRouter>
  );

  return `
        <!DOCTYPE html>
        <html>
          <head>
            <title>SSR with RR</title>
          </head>
    
          <body>
            <div id="app">${markup}</div>
          </body>
          <script src="/bundle.js" defer></script>
          <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
        </html>
      `;
}
