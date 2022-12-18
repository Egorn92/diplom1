import { StyledHeader } from "./ProductPage";
import { NavigationBlack } from "../components/navigation/NavigationBlack";
import { Wrapper } from "../styles/styles";
import { Bag } from "../components/bag/Bag";
import { Footer } from "../components/footer/Footer";

export const BagPage = () => {
  return (
    <>
      <StyledHeader className="section">
        <NavigationBlack />
      </StyledHeader>
      <Wrapper>
        <main>
          <Bag />
        </main>
        <Footer />
      </Wrapper>
    </>
  );
};
