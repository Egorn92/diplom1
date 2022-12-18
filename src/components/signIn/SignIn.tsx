import { memo } from "react";
import { useSignInValidateForm } from "../../hooks/useSignInValidateForm";
import { en_US } from "../../locale/en_US";
import { config } from "./config";
import { ButtonBlack } from "../UI/ButtonBlack";
import { Link } from "react-router-dom";
import { StyledForm, FormTop, FormTitle, CloseBtn, FormInput } from "./styles";

export const SignIn = memo(() => {
  const { handleSubmit, dispatch } = useSignInValidateForm();
  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormTop className="top">
        <FormTitle>{en_US.sectionTitles.signIn}</FormTitle>
        <Link to="/home">
          <CloseBtn />
        </Link>
      </FormTop>
      <div className="medium">
        {config.slice(2).map(({ title, action, type }) => {
          return (
            <FormInput
              type={type}
              key={title}
              onChange={(event) => dispatch(action(event.target.value))}
              placeholder={title}
            />
          );
        })}
      </div>
      <ButtonBlack>{en_US.buttons.signUp}</ButtonBlack>
    </StyledForm>
  );
});
