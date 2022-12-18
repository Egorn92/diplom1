import { useSignUpValidateForm } from "../../hooks/useSignUpValidateForm";
import { memo } from "react";
import { en_US } from "../../locale/en_US";
import { config } from "./config";
import { ButtonBlack } from "../UI/ButtonBlack";
import { Link } from "react-router-dom";
import {
  StyledForm,
  FormTop,
  FormTitle,
  CloseBtn,
  FormInput,
  Confirmation,
  StyledInscription,
  StyledLink,
} from "./styles";

export const SignUp = memo(() => {
  const { dispatch, handleSubmit, handleChange } = useSignUpValidateForm();

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormTop>
        <FormTitle>{en_US.sectionTitles.registration}</FormTitle>
        <Link to="/home">
          <CloseBtn />
        </Link>
      </FormTop>
      {config.map(({ title, action, type }) => {
        return (
          <FormInput
            type={type}
            key={title}
            onChange={(event) => dispatch(action(event.target.value))}
            placeholder={title}
          />
        );
      })}
      <Confirmation>
        <input
          onChange={handleChange}
          type="checkbox"
          className="custom-checkbox"
          id="custom-checkbox"
        />
        <label htmlFor="custom-checkbox">
          {en_US.inputPlaceholders.newsSubscription}
        </label>
      </Confirmation>
      <StyledInscription>
        {en_US.other.confirm[1]}
        <span>{en_US.other.confirm[2]}</span>
        {en_US.other.confirm[3]}
        <span>{en_US.other.confirm[4]}</span>
      </StyledInscription>
      <ButtonBlack>{en_US.buttons.signUp}</ButtonBlack>
      <StyledLink to="/sign-in">{en_US.links.registered}</StyledLink>
    </StyledForm>
  );
});
