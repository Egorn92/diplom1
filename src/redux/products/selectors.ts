import { ProductsStateType } from "./types";

export const dataSelector = (state: ProductsStateType) => state.products.data;
export const errorSelector = (state: ProductsStateType) => state.products.error;
export const isLoadingSelector = (state: ProductsStateType) =>
  state.products.isLoading;
