import { ProductType } from "../products/types";
import { ActionType, SEARCHING_VALUE } from "./types";

export const actionInputValue = (
  value: ProductType[] | undefined
): ActionType => ({
  type: SEARCHING_VALUE,
  payload: value,
});
