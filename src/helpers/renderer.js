import { StaticRouter } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import React from 'react';
import Routes from '../client/Routes';
import serialize from 'serialize-javascript';
import {Helmet} from 'react-helmet';

export default (req, store, context) => {
  const content = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();

  return `
            <html>
                <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
                </head>
                <body>
                    <div id="root">${content}</div>
                    <script>
                    window.INITIAL_STATE = ${serialize(store.getState())}
                    </script>
                    <script src="bundle.js"></script>
                </body>
            </html>
        `;
};
