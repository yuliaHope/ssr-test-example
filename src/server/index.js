import express from 'express';
import React from 'react';
import cors from 'cors';
import { matchPath } from "react-router-dom"
import routes from '../shared/routes';
import createStore from '../shared/store';

import { serverRenderer } from './render';

const app = express();

app.use(cors());

// We're going to serve up the public
// folder since that's where our
// client bundle.js file will end up.
app.use(express.static('public'));

app.get('*', (req, res, next) => {
  // We create store before rendering html
  const store = createStore();
  // We pass store to renderer

  // Checks the given path, matches with component and returns array of items about to be rendered
  const activeRoute = routes.find(
    (route) => matchPath(req.url, route)
  ) || {};

  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(store, req.path)
    : Promise.resolve()

  promise.then(() => {
    const context = {};
    const content = serverRenderer(req, store, context);

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`);
});
