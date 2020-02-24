import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../shared/reducers';

export default (state = {}) => {
  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
};
