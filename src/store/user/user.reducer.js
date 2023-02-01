import { USER_ACTION_TYPES } from "./user.types";

export const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (initialState = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...initialState,
        currentUser: payload,
      };
    default:
      return initialState;
  }
};