import { Link } from "react-router-dom";
import { memo } from "react";
import Slider from "react-slick";
import { en_US } from "../../locale/en_US";
import { useGetProductsData } from "../../hooks/useGetProductsData";
import { ProductType } from "../../redux/products/types";
import { SectionTitle } from "../UI/SectionTitle";

import { ProductCard } from "../productCard/ProductCard";
import { settings } from "./config";
import { StyledSales } from "./styles";

export const Sales = memo(() => {
  const getProductsData = useGetProductsData();
  const data = getProductsData();

  return (
    <StyledSales className="section">
      <SectionTitle>
        {en_US.sectionTitles.sales.mainPart}
        <span className="bold-part">
          {en_US.sectionTitles.sales.accentPart}
        </span>
      </SectionTitle>
      <Slider {...settings}>
        {data &&
          data.map(
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
      </Slider>
    </StyledSales>
  );
});
