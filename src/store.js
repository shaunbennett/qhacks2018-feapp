import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger'; //logs actions very nicely
import thunk from 'redux-thunk';
// IMPORT COMBINED REDUCER
import reducers from './reducers/index';

// STEP 1 CREATE STORE
const middleware = applyMiddleware(thunk, logger);

// Create client-side store
const store = createStore(reducers, middleware);

export default store;
