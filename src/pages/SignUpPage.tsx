import styled from "styled-components";
import { LightTheme } from "../styles/Themes";
import { SignUp } from "../components/signIn/SignUp";

export const SignUpPage = () => {
  return (
    <StyledSignUp>
      <SignUp />
    </StyledSignUp>
  );
};

const StyledSignUp = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${LightTheme.colors.lightGray};
`;
