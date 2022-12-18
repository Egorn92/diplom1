import styled from "styled-components";
import { LightTheme } from "../../styles/Themes";

export const ProductsSection = styled.section`
  padding-bottom: 0;
  .not-found {
    text-align: center;
    color: ${LightTheme.colors.mainText};
    font-size: ${LightTheme.fontSizes.sm};
    font-weight: ${LightTheme.fontWeight.regular};
  }
  .hidden {
    display: none;
  }
`;

export const ProductsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 12px;
  @media ${LightTheme.media.xl} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${LightTheme.media.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ButtonContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
