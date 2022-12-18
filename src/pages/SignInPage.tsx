import styled from "styled-components";
import { LightTheme } from "../styles/Themes";
import { SignIn } from "../components/signIn/SignIn";

export const SignInPage = () => {
  return (
    <StyledSignIn>
      <SignIn />
    </StyledSignIn>
  );
};

const StyledSignIn = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${LightTheme.colors.lightGray};
`;
