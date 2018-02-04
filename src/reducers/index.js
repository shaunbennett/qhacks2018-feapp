import { combineReducers } from 'redux';

// COMBINED REDUCERS
import { authReducer } from './authReducer';
import { infoReducer } from './infoReducer';
import { courseReducer } from './courseReducer';

export default combineReducers({
  info: infoReducer,
  auth: authReducer,
  course: courseReducer
});
