import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from '../client/reducers/index';
import axios from 'axios';
export default (req) => {
  const axiosInstance = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: {
      cookie: req.get('cookie') || '',
    },
  });
  const store = createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(axiosInstance)))
  );

  return store;
};
