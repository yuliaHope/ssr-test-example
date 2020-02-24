import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';
import App from '../shared/app';

export function serverRenderer(req, store, context) {
  const markup = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
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
          <script>window.__INITIAL_DATA__ = ${serialize(store.getState())}</script>
        </html>
      `;
}
