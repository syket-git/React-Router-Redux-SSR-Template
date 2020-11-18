import 'babel-polyfill';
import express from 'express';
import Routes from './client/Routes';
import createStore from './helpers/createStore';
import bodyParser from 'body-parser';
import { matchRoutes } from 'react-router-config';
import renderer from './helpers/renderer';
import proxy from 'express-http-proxy';

const app = express();

app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'r-ssr.herokuapp.com';
      return opts;
    },
  })
);

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('*', (req, res) => {
  const store = createStore(req);

  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    })
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, reject) => {
          return promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);
    if (context.url) {
      res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  });
});

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
