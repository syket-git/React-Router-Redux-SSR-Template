import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { renderRoutes } from 'react-router-config';
import history from './history';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api'
})


const store = createStore(
  reducers,
  window.INITIAL_STATE,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(axiosInstance)))
);

ReactDOM.hydrate(
  <Router history={history}>
    <Provider store={store}>
      <div>{renderRoutes(Routes)}</div>
    </Provider>
  </Router>,
  document.querySelector('#root')
);
