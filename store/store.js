import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
// import thunk from 'redux-thunk';

import rootReducers from './reducers/index';

const rootStore = createStore(
  rootReducers,
  composeWithDevTools(),
  // applyMiddleware(thunk),
  // other store enhancers if any
);

export default rootStore;
