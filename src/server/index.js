import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import { fetchPopularArticles } from '../shared/api';
import App from '../shared/app';

const app = express();

app.use(cors());

// We're going to serve up the public
// folder since that's where our
// client bundle.js file will end up.
app.use(express.static('public'));

app.get('*', (req, res, next) => {
  fetchPopularArticles()
    .then(data => {
      console.log('data', data);
      const markup = renderToString(<App data={data} />);

      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>SSR with RR</title>
          </head>
    
          <body>
            <div id="app">${markup}</div>
          </body>
          <script src="/bundle.js" defer></script>
          <script>window.__INITIAL_DATA__ = ${serialize(
            store.getState()
          ).replace(/</g, '\\u003c')}</script>
        </html>
      `);
    })
    .catch(next);
});

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`);
});
