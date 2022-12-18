import styled from "styled-components";
import { LightTheme } from "./Themes";

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 104px;

  @media ${LightTheme.media.lg} {
    padding: 0 52px;
  }

  @media ${LightTheme.media.md} {
    padding: 0 26px;
  }
`;
