import styled from "styled-components";
import { LightTheme } from "../../styles/Themes";
import arrowRightImg from "../../assets/icons/UI/arrow-right.svg";

export const InstaShopSection = styled.section``;

export const InstaShopTitle = styled.h4`
  margin-right: 60px;
  margin-bottom: 30px;
  display: inline-block;
  font-size: ${LightTheme.fontSizes.xs};
  font-weight: ${LightTheme.fontWeight.regular};
  @media ${LightTheme.media.sm} {
    margin-bottom: 20px;
    font-size: ${LightTheme.fontSizes.xxxs};
  }
`;

export const LinkArrow = styled.button`
  width: 12px;
  height: 12px;
  margin-left: -47px;
  background: no-repeat center url(${arrowRightImg});
`;

export const Preview = styled.div`
  margin-bottom: 30px;
  display: grid;
  grid-template-rows: repeat(2, 313px);
  grid-template-columns: auto repeat(2, 313px);
  grid-template-areas:
    "left first-center first-right"
    "left second-center second-right";
  grid-gap: 0;
  overflow: hidden;

  @media ${LightTheme.media.xl} {
    grid-template-rows: repeat(2, 260px);
    grid-template-columns: auto repeat(2, 260px);
  }
  @media ${LightTheme.media.lg} {
    grid-template-rows: repeat(2, 230px);
    grid-template-columns: auto repeat(2, 230px);
  }
  @media ${LightTheme.media.md} {
    grid-template-rows: repeat(2, 200px);
    grid-template-columns: auto repeat(2, 200px);
  }
  @media ${LightTheme.media.sm} {
    grid-template-rows: 524px repeat(2, 200px);
    grid-template-columns: repeat(2, 200px);
    grid-template-areas:
      "left left "
      "first-center first-right"
      "second-center second-right";
    justify-content: center;
  }
  @media ${LightTheme.media.xs} {
    grid-template-rows: repeat(5, 417px);
    grid-template-columns: 417px;
    grid-template-areas:
      "left"
      "first-center"
      "first-right"
      "second-center"
      "second-right";
    justify-content: center;
  }
`;

export const BlackBlousePhoto = styled.img`
  width: 100%;
  height: 100%;
  grid-area: left;
  object-fit: cover;
  @media ${LightTheme.media.xs} {
    width: 417px;
    width: 100%;
    align-self: center;
  }
`;
export const StripedSweaterPhoto = styled.img`
  width: 100%;
  grid-area: "first-center";
`;
export const BlackTopBackPhoto = styled.img`
  grid-area: "first-right";
  width: 100%;
`;
export const BlackTopFrontPhoto = styled.img`
  width: 100%;
  grid-area: "second-center";
`;
export const GraySuitPhoto = styled.img`
  width: 100%;
  grid-area: "second-right";
`;
