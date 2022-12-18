import styled from "styled-components";
import { LightTheme } from "../../styles/Themes";
import ArrowBtn from "../../assets/icons/UI/arrowButton.svg";

export const StyledSales = styled.section`
  .slick-slider {
    position: relative;
  }
  .slick-list {
    overflow: hidden;
  }
  .slick-track {
    display: flex;
    justify-content: space-around;
  }
  .slick-slide {
    max-width: 296px;
    width: 100%;
  }
  .slick-arrow {
    position: absolute;
    top: 35%;
    font-size: 0;
    z-index: 10;
    @media ${LightTheme.media.lg} {
      top: 40%;
    }
  }
  .slick-arrow.slick-prev {
    left: -35px;
    width: 70px;
    height: 70px;
    background: no-repeat url(${ArrowBtn}) 0 0/25%
      ${LightTheme.colors.generalWhite};
    background-position: center;
    border-radius: 50%;
    border: none;
    box-shadow: -2px -2px 2px 0px rgba(0, 0, 0, 0.1);
    transform: scale(-1);
    @media ${LightTheme.media.lg} {
      width: 50px;
      height: 50px;
      left: -30px;
    }
    @media ${LightTheme.media.sm} {
      width: 40px;
      height: 40px;
      left: -25px;
    }
  }
  .slick-arrow.slick-next {
    width: 70px;
    height: 70px;
    right: -30px;
    background: no-repeat url(${ArrowBtn}) 0 0/25%
      ${LightTheme.colors.generalWhite};
    background-position: center;
    border-radius: 50%;
    border: none;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
    @media ${LightTheme.media.lg} {
      width: 50px;
      height: 50px;
      right: -27px;
    }
    @media ${LightTheme.media.sm} {
      width: 40px;
      height: 40px;
      right: -24px;
    }
  }
  .slick-dots {
    display: none;
  }
`;
