import styled from "styled-components";
import { LightTheme } from "../../styles/Themes";
import wishListIcon from "../../assets/icons/UI/wishlist-icon.svg";

export const ProductItem = styled.div`
  width: 298px;
  height: 444px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;

  :hover :first-child {
    filter: brightness(50%);
  }
  :hover > button {
    transition: 0.5s ease;
    opacity: 1;
  }

  @media ${LightTheme.media.lg} {
    width: 260px;
    height: auto;
  }

  @media ${LightTheme.media.sm} {
    width: 220px;
  }
  @media ${LightTheme.media.xs} {
    width: 180px;
  }
`;
export const Photo = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: 0.5s ease;
  @media ${LightTheme.media.lg} {
    width: 240px;
    height: 320px;
  }
  @media ${LightTheme.media.sm} {
    width: 220px;
    height: 280px;
  }
  @media ${LightTheme.media.xs} {
    width: 180px;
    height: 240px;
  }
`;
export const WishList = styled.button`
  width: 31px;
  height: 28px;
  margin: 12px 12px 0 0;
  position: absolute;
  top: 0;
  right: 0;
  background: no-repeat center url(${wishListIcon});
  background-size: contain;
  :hover {
    cursor: pointer;
  }
  @media ${LightTheme.media.xl} {
    margin: 6px 6px 0 0;
  }
  @media (max-width: 1040px) {
    margin: 6px 28px 0 0;
  }
  @media ${LightTheme.media.lg} {
    margin: 6px 24px 0 0;
  }
  @media ${LightTheme.media.sm} {
    margin: 6px 6px 0 0;
  }
  @media ${LightTheme.media.xs} {
    margin: 6px 12px 0 0;
  }
`;

export const Price = styled.span`
  margin-top: 12px;
  font-size: ${LightTheme.fontSizes.md};
  font-weight: ${LightTheme.fontWeight.bold};

  @media ${LightTheme.media.md} {
    font-size: ${LightTheme.fontSizes.xxs};
  }
  @media ${LightTheme.media.sm} {
    font-size: ${LightTheme.fontSizes.xxxs};
  }
`;
