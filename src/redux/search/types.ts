import { ProductType } from "../products/types";

export const SEARCHING_VALUE = "SEARCHING_VALUE";

export type ActionType = {
  type: typeof SEARCHING_VALUE;
  payload: ProductType[] | undefined;
};

export type StateType = {
  value: ProductType[] | undefined;
};

export type searchingValueStateType = {
  searchingValue: StateType;
};

export const initialSearchingValueState = {
  value: undefined,
};
