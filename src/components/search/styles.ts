import styled from "styled-components";
import { LightTheme } from "../../styles/Themes";
import closeSearchIcon from "../../assets/icons/UI/close-search-bnt.svg";

export const SearchSection = styled.section`
  padding: 181px 60px 594px 213px;
  width: 100%;
  position: absolute;
  top: -22px;
  left: 0;
  bottom: 100%;
  height: 837px;
  z-index: 1;
  display: flex;

  background-color: rgba(82, 79, 79, 0.7);

  transform: translateY(-150%);
  animation: ani 1s forwards;
  @keyframes ani {
    0% {
      transform: translateY(-150%);
    }
    100% {
      transform: translateY(0);
    }
  }
  @media ${LightTheme.media.lg} {
    width: 100vw;
    height: 40vh;
    padding: 20px 20px 20px 20px;
    background-color: ${LightTheme.colors.darkGray};
  }
  @media ${LightTheme.media.sm} {
    width: 100vw;
    height: 40vh;
    padding: 20px 20px 20px 20px;
    background-color: ${LightTheme.colors.darkGray};
  }
`;

export const CloseBtn = styled.button`
  width: 44px;
  height: 44px;
  margin-right: 86px;
  position: relative;
  top: 10px;
  background-color: none;
  background: center no-repeat url(${closeSearchIcon});
  background-size: 100%;
  @media ${LightTheme.media.sm} {
    width: 34px;
    height: 34px;
    margin-right: 24px;
  }
`;

export const SearchInput = styled.input`
  padding: 10px 0;
  height: 44px;
  width: 1037px;

  background: none;
  border: none;
  border-bottom: 3px solid ${LightTheme.colors.generalWhite};

  color: ${LightTheme.colors.generalWhite};
  font-size: ${LightTheme.fontSizes.xl};
  font-weight: ${LightTheme.fontWeight.regular};
  line-height: 24px;

  ::placeholder {
    color: ${LightTheme.colors.generalWhite};
    font-size: ${LightTheme.fontSizes.xl};
    font-weight: ${LightTheme.fontWeight.regular};
    line-height: 24px;
  }

  :focus {
    outline: none;
  }

  @media ${LightTheme.media.sm} {
    max-width: 80vw;
    width: 100%;
    font-size: ${LightTheme.fontSizes.md};
    border-bottom: 2px solid ${LightTheme.colors.generalWhite};

    ::placeholder {
      font-size: ${LightTheme.fontSizes.md};
    }
  }
`;
