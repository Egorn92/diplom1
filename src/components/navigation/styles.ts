import styled from "styled-components";
import { LightTheme } from "../../styles/Themes";
import searchIconWhite from "../../assets/icons/UI/search-icon.svg";
import searchIconBlack from "../../assets/icons/UI/search-icon-black.svg";
import wishListIconWhite from "../../assets/icons/UI/wishlist-icon.svg";
import wishListIconBlack from "../../assets/icons/UI/wishlist-icon-black.svg";
import bagIconWhite from "../../assets/icons/UI/shopping-cart-icon.svg";

export const NavigationWhiteSection = styled.nav`
  margin: 0 60px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${LightTheme.colors.generalWhite};
  overflow: hidden;
  @media ${LightTheme.media.sm} {
    margin: 0 10px 0;
  }
`;

export const NavigationBlackSection = styled.nav`
  margin: 0 60px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${LightTheme.colors.mainText};
`;

export const NavList = styled.ul`
  display: flex;
  /* @media ${LightTheme.media.sm} {
    display: none;
  } */
`;
export const NavListItem = styled.li`
  font-size: ${LightTheme.fontSizes.xxxs};
  font-weight: ${LightTheme.fontWeight.regular};
  :not(:first-child):not(:last-child) {
    margin: 0 20px;
  }
  :first-child {
    margin-right: 20px;
  }
  :last-child {
    margin-left: 20px;
  }
  .sign-out {
    color: ${LightTheme.colors.generalWhite};
    font-size: ${LightTheme.fontSizes.xxxs};
    font-weight: ${LightTheme.fontWeight.regular};
    background: none;
  }
  .black {
    color: ${LightTheme.colors.mainText};
  }
`;

export const LogoWhite = styled.p`
  font-size: ${LightTheme.fontSizes.xxl};
  font-weight: ${LightTheme.fontWeight.bold};
  @media ${LightTheme.media.sm} {
    font-size: ${LightTheme.fontSizes.lg};

    transform: translateX(30%);
  }
`;

export const SearchButtonWhite = styled.button`
  padding-left: 20px;
  color: ${LightTheme.colors.generalWhite};
  font-size: ${LightTheme.fontSizes.xxxs};
  font-weight: ${LightTheme.fontWeight.regular};
  background: left no-repeat url(${searchIconWhite});

  @media ${LightTheme.media.sm} {
    width: 16px;
    height: 16px;
    background: bottom no-repeat url(${searchIconWhite});
    background-size: 14px;
  }
`;

export const SearchButtonBlack = styled.button`
  padding-left: 20px;
  color: ${LightTheme.colors.mainText};
  font-size: ${LightTheme.fontSizes.xxxs};
  font-weight: ${LightTheme.fontWeight.regular};
  background: left no-repeat url(${searchIconBlack});
  background-size: 12px;
`;

export const BagButton = styled.button`
  width: 14px;
  height: 16px;
  position: relative;

  background: top no-repeat url(${bagIconWhite});
  background-size: 100%;
`;

export const ItemsCircle = styled.div`
  width: 10px;
  height: 10px;

  position: absolute;
  top: 12px;
  left: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${LightTheme.colors.generalWhite};
  font-size: 6px;
  font-weight: ${LightTheme.fontWeight.regular};
  text-align: center;

  background-color: ${LightTheme.colors.accentRed};
  border-radius: 50%;
`;

export const WishListBtnWhite = styled.button`
  width: 14px;
  height: 14px;
  background-color: none;
  background: top no-repeat url(${wishListIconWhite});
  background-size: 12px;
  @media ${LightTheme.media.sm} {
    width: 16px;
    height: 16px;
    background: bottom no-repeat url(${wishListIconWhite});
    background-size: 16px;
  }
`;

export const WishListBtnBlack = styled.button`
  width: 14px;
  height: 14px;
  background-color: none;
  background: center no-repeat url(${wishListIconBlack});
  background-size: 12px;
`;
