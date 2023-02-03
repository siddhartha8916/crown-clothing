import { USER_ACTION_TYPES } from "./user.types";

export const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (initialState = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        ...initialState,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.SIGN_IN_FAIL:
    case USER_ACTION_TYPES.SIGN_OUT_FAIL:
    case USER_ACTION_TYPES.SIGN_UP_FAIL:
      return {
        ...initialState,
        error: payload,
        isLoading: false,
      };
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS: 
      return {
        ...initialState,
        currentUser: null,
        isLoading: false,
      };

    default:
      return initialState;
  }
};
