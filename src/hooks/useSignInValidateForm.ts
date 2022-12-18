import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { signUpSelector } from "../redux/signUp-signIn/selectors";
import {
  actionSignUpEmail,
  actionSignUpPassword,
} from "../redux/signUp-signIn/actions";

export const useSignInValidateForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signUpData = useSelector(signUpSelector);

  const handleSubmit = () => {
    try {
      auth.signInWithEmailAndPassword(signUpData.email, signUpData.password);
      navigate("/home");
      dispatch(actionSignUpEmail(""));
      dispatch(actionSignUpPassword(""));
    } catch (e) {
      console.dir(e);
    }
  };

  return { handleSubmit, dispatch };
};
