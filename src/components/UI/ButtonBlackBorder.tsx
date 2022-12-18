import { memo } from "react";
import styled from "styled-components";
import { LightTheme } from "../../styles/Themes";

type ButtonType = {
  children: string;
  handleClick: any;
};

export const ButtonBlackBorder = memo(
  ({ children, handleClick }: ButtonType) => {
    return <StyledButton onClick={handleClick}>{children}</StyledButton>;
  }
);

const StyledButton = styled.button`
  width: 240px;
  height: 50px;
  margin-top: 56px;
  color: ${LightTheme.colors.mainText};
  font-size: ${LightTheme.fontSizes.xs};
  font-weight: ${LightTheme.fontWeight.regular};
  border: 1px solid ${LightTheme.colors.mainText};
  background: none;
`;
