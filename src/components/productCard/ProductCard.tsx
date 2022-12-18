import { memo } from "react";
import { useProductCard } from "../../hooks/useProductCard";
import { ButtonAddToBag } from "../UI/ButtonAddToBag";
import { ProductItem, Photo, WishList, Price } from "./styles";
import { Link } from "react-router-dom";
import { bagDataType } from "../../redux/bag/types";

export const ProductCard = memo(
  ({
    id,
    name,
    price,
    color,
    availableSizes,
    description,
    images,
    quantity,
  }: bagDataType) => {
    const { handleClickAddToBag, handleClickWishList } = useProductCard({
      id,
      name,
      price,
      color,
      availableSizes,
      description,
      images,
      quantity,
    });

    return (
      <ProductItem>
        <Link
          to={`/product/${id}`}
          state={{
            id,
            name,
            price,
            color,
            availableSizes,
            description,
            images,
          }}
        >
          <Photo src={images[0]} alt={name} />
        </Link>
        <WishList onClick={handleClickWishList} />
        <ButtonAddToBag onClick={handleClickAddToBag} />
        <Link
          to={`/product/${id}`}
          state={{
            id,
            name,
            price,
            color,
            availableSizes,
            description,
            images,
          }}
        >
          <Price>{"$" + price.value}</Price>
        </Link>
      </ProductItem>
    );
  }
);
