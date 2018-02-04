import { AUTHENTICATE_USER, LOGOUT_USER } from '../actions/authActions';

export const initialState = {
  authenticated: false,
  user: null
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return { ...state, authenticated: true, user: action.user };
    case LOGOUT_USER:
      return { ...state, authenticated: false, user: null };
    default:
      return state;
  }
}
