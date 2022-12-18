import styled from "styled-components";
import { LightTheme } from "../../styles/Themes";

export const StyledCategories = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${LightTheme.colors.mainText};
  overflow: hidden;

  .not-found {
    text-align: center;
    color: ${LightTheme.colors.mainText};
    font-size: ${LightTheme.fontSizes.sm};
    font-weight: ${LightTheme.fontWeight.regular};
  }
`;
export const Items = styled.ul`
  /* max-width: fit-content; */
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-gap: 12px;
  justify-items: center;
  align-items: center;

  @media ${LightTheme.media.xl} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${LightTheme.media.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${LightTheme.media.md} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${LightTheme.media.sm} {
    grid-template-columns: repeat(2, 1fr);
  } ;
`;
export const Item = styled.li`
  max-width: 194px;
  width: 100%;
  height: 90px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${LightTheme.colors.accentGray};
  font-size: ${LightTheme.fontSizes.lg};
  @media ${LightTheme.media.sm} {
    max-width: 180px;
    width: 100%;
    padding: 20px 16px;
  }
  :hover {
    cursor: pointer;
  }

  .item__icon {
    width: 40px;
    height: 40px;

    @media ${LightTheme.media.sm} {
      width: 26px;
      height: 26px;
    }
  }
`;
export const Subtitle = styled.p`
  margin-left: 16px;
  text-align: left;
  font-size: ${LightTheme.fontSizes.lg};
  @media ${LightTheme.media.sm} {
    font-size: ${LightTheme.fontSizes.md};
    margin-left: 6px;
  }
`;
