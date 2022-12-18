export const SIGN_UP_FIRST_NAME = "SIGN_UP_FIRST_NAME";
export const SIGN_UP_LAST_NAME = "SIGN_UP_LAST_NAME";
export const SIGN_UP_EMAIL = "SIGN_UP_EMAIL";
export const SIGN_UP_PASSWORD = "SIGN_UP_PASSWORD";
// export const SIGN_UP_USER_ID = "SIGN_UP_USER_ID";

export type ActionType = {
  type:
    | typeof SIGN_UP_FIRST_NAME
    | typeof SIGN_UP_LAST_NAME
    | typeof SIGN_UP_EMAIL
    | typeof SIGN_UP_PASSWORD;
  // | typeof SIGN_UP_USER_ID;
  payload: string;
};

export type StateType = {
  // id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type signUpStateType = {
  signUp: StateType;
};

export const initialsignUpState = {
  // id: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
