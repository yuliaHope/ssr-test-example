import express from "express";
import cors from "cors";
import React from "react";
import { renderToString } from "react-dom/server";
import serialize from "serialize-javascript";
import App from '../client/app';

const app = express();

app.use(cors());

// We're going to serve up the public
// folder since that's where our
// client bundle.js file will end up.
app.use(express.static("public"));

app.get("*", (req, res, next) => {
  const name = 'Tyler';
  const markup = renderToString(
    <App data={name}/>
  );
  
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
        <script>window.__INITIAL_DATA__ = ${serialize(name)}</script>
      </html>
    `);
  })

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`);
})