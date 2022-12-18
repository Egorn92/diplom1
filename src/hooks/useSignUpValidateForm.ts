import { useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { database } from "../firebase/firebase";
import { signUpSelector } from "../redux/signUp-signIn/selectors";
import {
  actionSignUpEmail,
  actionSignUpFirstName,
  actionSignUpLastName,
  actionSignUpPassword,
} from "../redux/signUp-signIn/actions";

export const useSignUpValidateForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signUpData = useSelector(signUpSelector);
  const [isChecked, setChecked] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isChecked) {
      try {
        auth.createUserWithEmailAndPassword(
          signUpData.email,
          signUpData.password
        );
        database().ref("/users").push(signUpData);
        navigate("/home");
        dispatch(actionSignUpFirstName(""));
        dispatch(actionSignUpLastName(""));
        dispatch(actionSignUpEmail(""));
        dispatch(actionSignUpPassword(""));
      } catch (e) {
        console.dir(e);
      }
    }
  };

  const handleChange = () => {
    setChecked((current) => !current);
  };

  return { dispatch, handleSubmit, handleChange };
};
