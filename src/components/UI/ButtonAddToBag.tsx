import { memo, MouseEventHandler, FC } from "react";
import styled from "styled-components";
import { LightTheme } from "../../styles/Themes";
import { en_US } from "../../locale/en_US";

export const ButtonAddToBag: FC<{
  onClick?: MouseEventHandler<HTMLButtonElement>;
}> = memo(({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>{en_US.buttons.addToBag}</StyledButton>
  );
});

const StyledButton = styled.button`
  width: 170px;
  height: 40px;
  color: ${LightTheme.colors.mainText};
  font-size: ${LightTheme.fontSizes.sm};
  font-weight: ${LightTheme.fontWeight.regular};
  border-radius: 48px;
  background-color: ${LightTheme.colors.generalWhite};
  opacity: 0;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.5s ease;
  @media ${LightTheme.media.lg} {
    left: 47%;
  }
  @media ${LightTheme.media.sm} {
    left: 50%;
  }
`;
