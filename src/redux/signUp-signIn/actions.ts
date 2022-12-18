import {
  ActionType,
  SIGN_UP_FIRST_NAME,
  SIGN_UP_LAST_NAME,
  SIGN_UP_EMAIL,
  SIGN_UP_PASSWORD,
  // SIGN_UP_USER_ID,
} from "./types";

// export const actionUserId = (id: string): ActionType => ({
//   type: SIGN_UP_USER_ID,
//   payload: id,
// });

export const actionSignUpFirstName = (firstName: string): ActionType => ({
  type: SIGN_UP_FIRST_NAME,
  payload: firstName,
});
export const actionSignUpLastName = (lastName: string): ActionType => ({
  type: SIGN_UP_LAST_NAME,
  payload: lastName,
});
export const actionSignUpEmail = (email: string): ActionType => ({
  type: SIGN_UP_EMAIL,
  payload: email,
});
export const actionSignUpPassword = (password: string): ActionType => ({
  type: SIGN_UP_PASSWORD,
  payload: password,
});
