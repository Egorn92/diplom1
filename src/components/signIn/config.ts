import { en_US } from "../../locale/en_US";
import {
  actionSignUpFirstName,
  actionSignUpLastName,
  actionSignUpEmail,
  actionSignUpPassword,
} from "../../redux/signUp-signIn/actions";

export const config = [
  {
    title: en_US.inputPlaceholders.firstName,
    action: actionSignUpFirstName,
    type: "text",
  },
  {
    title: en_US.inputPlaceholders.lastName,
    action: actionSignUpLastName,
    type: "text",
  },
  {
    title: en_US.inputPlaceholders.email,
    action: actionSignUpEmail,
    type: "email",
  },
  {
    title: en_US.inputPlaceholders.password,
    action: actionSignUpPassword,
    type: "password",
  },
];
