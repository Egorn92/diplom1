import {
  ActionType,
  REQUEST_PRODUCTS,
  REQUEST_PRODUCTS_SUCCEED,
  REQUEST_PRODUCTS_FAILED,
  CLEAR_PRODUCTS_DATA,
  ProductsPayloadType,
} from "./types";

export const actionGetProductsRequested = (): ActionType => ({
  type: REQUEST_PRODUCTS,
});

export const actionClearProductsData = (): ActionType => ({
  type: CLEAR_PRODUCTS_DATA,
});

export const actionGetProductsSucceed = (
  data: ProductsPayloadType
): ActionType => ({
  type: REQUEST_PRODUCTS_SUCCEED,
  payload: data,
});

export const actionGetProductsFailed = (error: Error): ActionType => ({
  type: REQUEST_PRODUCTS_FAILED,
  payload: error,
});
