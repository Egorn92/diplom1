import { StyledHeader } from "./ProductPage";
import { NavigationBlack } from "../components/navigation/NavigationBlack";
import { Wrapper } from "../styles/styles";
import { WishList } from "../components/wishList/WishList";
import { Footer } from "../components/footer/Footer";

export const WishListPage = () => {
  return (
    <>
      <StyledHeader className="section">
        <NavigationBlack />
      </StyledHeader>
      <Wrapper>
        <main>
          <WishList />
        </main>
        <Footer />
      </Wrapper>
    </>
  );
};
