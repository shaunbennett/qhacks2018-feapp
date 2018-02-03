'use strict';
const courses = require('./courses');
export const initialState = {
  courses
};

export function infoReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
