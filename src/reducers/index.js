'use strict';
import { combineReducers } from 'redux';

// COMBINED REDUCERS
import { authReducer } from './authReducer';
import { infoReducer } from './infoReducer';

export default combineReducers({
  info: infoReducer,
  auth: authReducer
});
