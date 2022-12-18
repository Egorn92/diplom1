import { ProductType } from "../redux/products/types";

export const filterData = (data: ProductType[], str: string) => {
  const filteredData = data?.filter((product) => {
    return product.name.toLowerCase().includes(str?.toLowerCase());
  });

  return filteredData;
};
