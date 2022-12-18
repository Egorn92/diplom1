import styled from "styled-components";
import { LightTheme } from "../../styles/Themes";

export const StyledTopSection = styled.section`
  margin-top: 506px;
  margin-left: 150px;
  max-width: 546px;
  color: ${LightTheme.colors.generalWhite};
  @media ${LightTheme.media.md} {
    margin-left: 80px;
  }
  @media ${LightTheme.media.sm} {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${LightTheme.colors.mainText};
  }
  @media ${LightTheme.media.xs} {
    margin-top: 400px;
  }
`;

export const Title = styled.h2`
  font-size: ${LightTheme.fontSizes.xxl};
  font-weight: ${LightTheme.fontWeight.bold};

  @media ${LightTheme.media.sm} {
    width: 210px;
    margin: 0 auto;
    text-align: center;
    font-size: ${LightTheme.fontSizes.xl};
    color: ${LightTheme.colors.mainText};
  }
`;
export const SubTitle = styled.p`
  margin: 20px 0 30px;
  font-size: ${LightTheme.fontSizes.xs};
  font-weight: ${LightTheme.fontWeight.regular};
  line-height: 150%;
  text-overflow: ellipsis;
  @media ${LightTheme.media.sm} {
    max-width: 380px;
    width: 100%;

    text-align: center;
  }
`;
