import { NavigationWhite } from "../components/navigation/NavigationWhite";
import { TopSection } from "../components/top-section/TopSection";
import { SearchResults } from "../components/searchResults/SearchResults";
import { Categories } from "../components/categories/Categories";
import { Sales } from "../components/sales/Sales";
import { InstaShop } from "../components/instashop/InstaShop";
import { Footer } from "../components/footer/Footer";
import { Wrapper } from "../styles/styles";

import styled from "styled-components";
import homepageImg from "../assets/homepage-img.png";
import homepageSmallImg from "../assets/homepage-small-img.png";

import { LightTheme } from "../styles/Themes";

export const HomePage = () => {
  return (
    <div>
      <StyledHeader>
        <NavigationWhite />
        <TopSection />
      </StyledHeader>
      <Wrapper>
        <main>
          <SearchResults />
          <Categories />
          <Sales />
          <InstaShop />
        </main>
        <Footer />
      </Wrapper>
    </div>
  );
};

const StyledHeader = styled.header`
  padding-top: 22px;
  height: 837px;
  background: no-repeat center/100% url(${homepageImg});
  background-size: cover;
  background-position: top;
  @media ${LightTheme.media.xl} {
    background-position-x: 20%;
  }
  @media ${LightTheme.media.sm} {
    padding-top: 16px;
    background: no-repeat center/100% url(${homepageSmallImg});
    background-size: 425px/440px;
    background-position: top;
  }
  @media ${LightTheme.media.xs} {
    max-height: 720px;
    height: 100%;
  }
`;
