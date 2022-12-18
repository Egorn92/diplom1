import styled from "styled-components";
import { LightTheme } from "../../styles/Themes";

export const FooterSection = styled.footer`
  margin-bottom: 90px;
`;

export const FooterMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media ${LightTheme.media.md} {
    grid-template-columns: repeat(2, 1fr);

    /* display: flex;
    flex-direction: column; */
  }
`;

export const Items = styled.ul`
  @media ${LightTheme.media.md} {
    margin-bottom: 20px;
  }
  @media ${LightTheme.media.sm} {
    margin-bottom: 0;
    background-color: azure;
  }
`;

export const ItemTitle = styled.h4`
  margin-bottom: 30px;
  color: ${LightTheme.colors.mainText};
  font-size: ${LightTheme.fontSizes.xs};
  font-weight: ${LightTheme.fontWeight.regular};
`;

export const Item = styled.li`
  margin-bottom: 20px;
  max-width: 144px;
  color: ${LightTheme.colors.mainText};
  font-size: ${LightTheme.fontSizes.xxxs};
  font-weight: ${LightTheme.fontWeight.regular};

  /* .item-active {
    display: block;
  } */
`;

type OpenMenuType = {
  isOpen: number;
};
export const Minus = styled.div<OpenMenuType>`
  width: 16px;
  height: 1px;
  top: 18px;
  left: 10px;
  background-color: black;
  rotate: ${(props) => (props.isOpen ? "180deg" : "90deg")};
  transition: 0.5s all;
`;

export const MainMenu = styled.div<OpenMenuType>`
  width: 100%;
  max-height: ${(props) => (props.isOpen === 1 ? "auto" : 0)};
  height: 100%;
  font-size: ${(props) => (props.isOpen === 1 ? "16px" : 0)};
  transition: 2s;
  /* @media ${LightTheme.media.sm} { */
  background-color: red;
  /* } */
`;

export const FooterMenuMobileSection = styled.div`
  display: flex;
  flex-direction: column;
  /* height: auto; */
  /* min-height: 100%; */

  .wrapper {
    /* display: flex; */
    /* flex-direction: column; */
  }

  h4 {
    width: 100%;
    /* height: 100%; */
    /* display: block; */
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    @media ${LightTheme.media.sm} {
      background-color: aqua;
    }
  }
  .plus-line-width {
    width: 16px;
    height: 1px;
    top: 18px;
    left: 10px;
    background-color: black;
  }

  a {
    display: block;
    width: 100%;
    padding: 10px;
    text-align: center;
  }
`;
