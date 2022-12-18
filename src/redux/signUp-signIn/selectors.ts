import { signUpStateType } from "./types";

export const signUpSelector = (state: signUpStateType) => state.signUp;
// export const userIdSelector = (state: signUpStateType) => state.signUp.id;
export const firstNameSelector = (state: signUpStateType) =>
  state.signUp.firstName;
export const lastNameSelector = (state: signUpStateType) =>
  state.signUp.lastName;
export const emailSelector = (state: signUpStateType) => state.signUp.email;
export const passwordSelector = (state: signUpStateType) =>
  state.signUp.password;
