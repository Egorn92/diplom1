import { BagStateType } from "./types";

export const bagDataSelector = (state: BagStateType) => state.bag.data;
export const goodQuantitySelector = (state: BagStateType) => state.bag.quantity;
