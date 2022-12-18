import { memo } from "react";
import styled from "styled-components";
import { LightTheme } from "../../styles/Themes";

type ButtonType = {
  children: string;
};

export const ButtonWhite = memo(({ children }: ButtonType) => {
  return <StyledButton>{children}</StyledButton>;
});

const StyledButton = styled.button`
  width: 240px;
  height: 50px;
  color: ${LightTheme.colors.generalWhite};
  font-size: ${LightTheme.fontSizes.xs};
  font-weight: ${LightTheme.fontWeight.regular};
  border: 2px solid ${LightTheme.colors.generalWhite};
  background: none;
  :hover {
    border: 2px solid ${LightTheme.colors.mainText};
    background: ${LightTheme.colors.mainText};
  }

  @media ${LightTheme.media.sm} {
    color: ${LightTheme.colors.mainText};
    border-color: ${LightTheme.colors.mainText};
    :hover {
      color: ${LightTheme.colors.generalWhite};
      background: ${LightTheme.colors.mainText};
    }
  }
`;
