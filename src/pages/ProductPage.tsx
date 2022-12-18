import { useLocation } from "react-router-dom";
import { NavigationBlack } from "../components/navigation/NavigationBlack";
import { Product } from "../components/product/Product";
import { Wrapper } from "../styles/styles";
import { Footer } from "../components/footer/Footer";
import styled from "styled-components";

export const ProductPage = () => {
  const location: any = useLocation();
  const state = location.state;

  return (
    <div>
      <StyledHeader>
        <NavigationBlack />
      </StyledHeader>
      <main>
        <Product {...state} />
      </main>
      <Wrapper>
        <Footer />
      </Wrapper>
    </div>
  );
};

export const StyledHeader = styled.header`
  padding: 15px 0;
`;
