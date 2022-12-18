import styled from "styled-components";
import { LightTheme } from "../../styles/Themes";
import wishlistIcon from "../../assets/icons/UI/wishlist-icon.svg";
import plusIcon from "../../assets/icons/UI/expand-icon.svg";
import minusIcon from "../../assets/icons/UI/hide-icon.svg";

export const ProductSection = styled.section`
  height: 812px;
  display: flex;
`;

export const Photos = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 540px);
`;

export const Photo = styled.img`
  max-width: 100%;
  height: 100%;
`;

export const Description = styled.div`
  padding: 40px 60px;
`;

export const Name = styled.p`
  margin-bottom: 20px;
  color: ${LightTheme.colors.mainText};
  font-size: ${LightTheme.fontSizes.xs};
  font-weight: ${LightTheme.fontWeight.regular};
  text-align: left;
`;

export const Price = styled.span`
  margin-bottom: 10px;
  display: block;
  color: ${LightTheme.colors.mainText};
  font-size: ${LightTheme.fontSizes.xxs};
  font-weight: ${LightTheme.fontWeight.regular};
  text-align: left;
`;

export const PreOrder = styled.span`
  margin-bottom: 30px;
  display: block;
  color: ${LightTheme.colors.lightGray};
  font-size: ${LightTheme.fontSizes.xxs};
  font-weight: ${LightTheme.fontWeight.regular};
  text-align: left;
`;

export const ColorTitle = styled.span`
  margin-bottom: 12px;
  display: block;
  color: ${LightTheme.colors.secondaryText};
  font-size: ${LightTheme.fontSizes.xxs};
  font-weight: ${LightTheme.fontWeight.regular};
  text-align: left;
`;

export const Color = styled.input<{ bg: string }>`
  width: 30px;
  height: 30px;
  margin-bottom: 32px;
  border: 2px solid ${LightTheme.colors.generalWhite};
  background-color: ${(props) => props.bg};
`;

export const SizeTitle = styled.span`
  margin-bottom: 20px;
  display: block;
  color: ${LightTheme.colors.secondaryText};
  font-size: ${LightTheme.fontSizes.xxs};
  font-weight: ${LightTheme.fontWeight.regular};
  text-align: left;
`;

export const Size = styled.span`
  :not(:last-child) {
    margin-right: 12px;
  }
  margin-bottom: 40px;
  padding-bottom: 10px;

  width: auto;
  height: auto;

  display: inline-block;
  color: ${LightTheme.colors.mainText};
  font-size: ${LightTheme.fontSizes.xxs};
  font-weight: ${LightTheme.fontWeight.regular};
  text-align: left;
`;

export const Buttons = styled.div`
  display: flex;
  margin-bottom: 60px;
`;

export const AddWishListBtn = styled.button`
  width: 49px;
  height: 50px;
  color: ${LightTheme.colors.generalWhite};
  font-size: ${LightTheme.fontSizes.xs};
  font-weight: ${LightTheme.fontWeight.regular};
  border: 1px solid ${LightTheme.colors.generalWhite};
  background: no-repeat center url(${wishlistIcon})
    ${LightTheme.colors.mainText};
`;

export const List = styled.ul`
  color: ${LightTheme.colors.mainText};
  font-size: ${LightTheme.fontSizes.xxs};
  font-weight: ${LightTheme.fontWeight.regular};
  text-align: left;
  position: relative;

  p {
    margin-left: 32px;

    color: ${LightTheme.colors.secondaryText};
    font-size: ${LightTheme.fontSizes.xxs};
    font-weight: ${LightTheme.fontWeight.regular};
    line-height: ${LightTheme.fontSizes.xs};
    text-align: justify;

    visibility: hidden;
    height: 0;
    -webkit-transform: scaleY(0);
    -ms-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
    transition-duration: 0s;
  }

  :hover p {
    margin-bottom: 30px;
    visibility: visible;
    height: auto;
    -webkit-transform: scaleY(1);
    -ms-transform: scaleY(1);
    transform: scaleY(1);
    transition-duration: 1s;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 18px;

  :hover :first-child {
    background: no-repeat left url(${minusIcon});
    background-size: 12px;
  }
`;

export const ListIcon = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 16px;
  display: inline-block;
  background: no-repeat left url(${plusIcon});
  background-size: 12px;

  :hover {
    background: no-repeat left url(${minusIcon});
    background-size: 12px;
  }
`;
