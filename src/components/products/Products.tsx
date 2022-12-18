import { ProductType } from "../../redux/products/types";
import { ProductCard } from "../productCard/ProductCard";
import { SectionTitle } from "../UI/SectionTitle";
import { Link } from "react-router-dom";
import { en_US } from "../../locale/en_US";
import { ProductsSection, ProductsContent, ButtonContainer } from "./styles";
import { ButtonBlackBorder } from "../UI/ButtonBlackBorder";
import { useShowMoreProducts } from "../../hooks/useShowMoreProducts";

export const Products = ({ title, data }: PropsType) => {
  const { productsToShow, handleShowMorePosts } = useShowMoreProducts(data);

  if (productsToShow.length > 0) {
    return (
      <ProductsSection className="section">
        {productsToShow.length > 0 && <SectionTitle>{title}</SectionTitle>}
        <ProductsContent>
          {productsToShow &&
            productsToShow.map(
              ({
                id,
                name,
                price,
                color,
                availableSizes,
                description,
                images,
              }: ProductType) => {
                return (
                  <ProductCard
                    key={id}
                    {...{
                      id,
                      name,
                      price,
                      color,
                      availableSizes,
                      description,
                      images,
                    }}
                  />
                );
              }
            )}
        </ProductsContent>
        {data && productsToShow.length < data?.length ? (
          <ButtonContainer>
            <ButtonBlackBorder handleClick={handleShowMorePosts}>
              {en_US.buttons.showMore}
            </ButtonBlackBorder>
          </ButtonContainer>
        ) : (
          <div></div>
        )}
      </ProductsSection>
    );
  }
  if (productsToShow.length === 0) {
    return (
      <ProductsSection className="section">
        <p className="not-found">{en_US.other.notFound}</p>
      </ProductsSection>
    );
  } else return <ProductsSection className="hidden"></ProductsSection>;
};

type PropsType = {
  title: string;
  data: ProductType[] | undefined;
};
