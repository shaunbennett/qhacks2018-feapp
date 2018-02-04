const courses = require('./courses');
export const initialState = {
  courses: courses.courses
};

export function infoReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
