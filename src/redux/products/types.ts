export type ProductType = {
  id: string;
  type: string;
  name: string;
  price: {
    currency: string;
    value: string;
  };
  color: {
    name: string;
    hex: string;
  };
  availableSizes: string[];
  description: string;
  images: string[];
};

export const REQUEST_PRODUCTS = "REQUEST_PRODUCTS";
export const REQUEST_PRODUCTS_SUCCEED = "REQUEST_PRODUCTS_SUCCEED";
export const REQUEST_PRODUCTS_FAILED = "REQUEST_PRODUCTS_FAILED";
export const CLEAR_PRODUCTS_DATA = "CLEAR_PRODUCTS_DATA";

export type ActionType = {
  type:
    | typeof REQUEST_PRODUCTS
    | typeof REQUEST_PRODUCTS_SUCCEED
    | typeof REQUEST_PRODUCTS_FAILED
    | typeof CLEAR_PRODUCTS_DATA;
  payload?: ProductsPayloadType | Error;
};

export type ProductsPayloadType = ProductType[];

export type StateType = {
  data: ProductsPayloadType | null;
  error: string | null;
  isLoading: boolean;
};

export type ProductsStateType = {
  products: StateType;
};

export const initialProductsState = {
  data: null,
  error: null,
  isLoading: false,
};
