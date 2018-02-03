'use strict';
export const initialState = {
  is_authed: false,
  user: {}
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
