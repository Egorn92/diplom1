import { memo, MouseEventHandler, FC } from "react";
import styled from "styled-components";
import { LightTheme } from "../../styles/Themes";

type ButtonType = {
  children: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const ButtonBlack: FC<{
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: string;
}> = memo(({ children, onClick }: ButtonType) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
});

const StyledButton = styled.button`
  width: ${(props) => (props ? "240px" : "190px")};
  height: 50px;
  color: ${LightTheme.colors.generalWhite};
  font-size: ${LightTheme.fontSizes.xs};
  font-weight: ${LightTheme.fontWeight.regular};
  border: 1px solid ${LightTheme.colors.generalWhite};
  background: ${LightTheme.colors.mainText};
`;
