import { memo } from "react";
import styled from "styled-components";
import { LightTheme } from "../../styles/Themes";

type SectionTitleType = {
  children: string | any;
};

export const SectionTitle = memo(({ children }: SectionTitleType) => {
  return <StyledTitle>{children}</StyledTitle>;
});

const StyledTitle = styled.h3`
  margin-bottom: 83px;
  text-align: center;
  color: ${LightTheme.colors.mainText};
  font-size: ${LightTheme.fontSizes.xl};
  font-weight: ${LightTheme.fontWeight.regular};

  .bold-part {
    font-weight: ${LightTheme.fontWeight.bold};
  }

  @media ${LightTheme.media.sm} {
    margin-bottom: 40px;
    font-size: 32px;
  }
`;
