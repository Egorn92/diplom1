import { ProductType } from "../redux/products/types";
import { useState, useEffect } from "react";

export const useShowMoreProducts = (data: ProductType[] | undefined) => {
  const [productsToShow, setProductsToShow] = useState<ProductType[]>([]);
  const [next, setNext] = useState<number>(8);

  const productsPerPage = 8;
  let arrayForHoldingPosts: ProductType[] = [];

  const loopWithSlice = (start: number, end: number) => {
    const slicedData = data?.slice(start, end);
    if (slicedData) {
      arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedData];
    }
    setProductsToShow(arrayForHoldingPosts);
  };

  useEffect(() => {
    loopWithSlice(0, 8);
  }, []);

  const handleShowMorePosts = () => {
    loopWithSlice(0, next + productsPerPage);
    setNext(next + productsPerPage);
  };

  return { productsToShow, handleShowMorePosts };
};
