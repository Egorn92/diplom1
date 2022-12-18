import { createGlobalStyle } from "styled-components";
import { LightTheme } from "./Themes";

export const GlobalStyles = createGlobalStyle<{ theme: any }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
    font-family: 'Roboto', sans-serif;
  }

  body {
    max-width: 1440px;
    width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
    border: none;
  }

  ul {
    list-style-type: none;
  }

  .section {
    padding: 90px 0;

    @media ${LightTheme.media.md} {
      padding: 60px 0;
    }
    @media ${LightTheme.media.sm} {
      padding: 40px 0;
    }
  }

  .container {
    position: relative;
  }
`;
