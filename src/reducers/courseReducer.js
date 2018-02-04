import { SEARCH_COURSE } from '../actions/courseActions';

export const initialState = {
  courseSearchString: ''
};

export function courseReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_COURSE:
      return { ...state, courseSearchString: action.courseSearchString };
    default:
      return state;
  }
}
