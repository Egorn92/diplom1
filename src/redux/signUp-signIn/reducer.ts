import {
  ActionType,
  StateType,
  initialsignUpState,
  SIGN_UP_FIRST_NAME,
  SIGN_UP_LAST_NAME,
  SIGN_UP_EMAIL,
  SIGN_UP_PASSWORD,
  // SIGN_UP_USER_ID,
} from "./types";

export const SignInReducer = (
  state: StateType = initialsignUpState,
  action: ActionType
) => {
  switch (action.type) {
    // case SIGN_UP_USER_ID:
    //   return { ...state, id: action.payload };
    case SIGN_UP_FIRST_NAME:
      return { ...state, firstName: action.payload };
    case SIGN_UP_LAST_NAME:
      return { ...state, lastName: action.payload };
    case SIGN_UP_EMAIL:
      return { ...state, email: action.payload };
    case SIGN_UP_PASSWORD:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
