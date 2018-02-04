import {
  SEARCH_COURSE,
  SEARCH_COURSE_LANDING_PAGE
} from '../actions/courseActions';

export const initialState = {
  courseSearchString: '',
  forceInputField: false
};

export function courseReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_COURSE:
      return { ...state, courseSearchString: action.courseSearchString };
    case SEARCH_COURSE_LANDING_PAGE:
      return {
        ...state,
        courseSearchString: action.courseSearchString,
        forceInputField: true
      };
    default:
      return state;
  }
}
