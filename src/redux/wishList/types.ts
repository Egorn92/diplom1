import { getFromLocalStorage } from "../../tools/getFromLocalStorage";
import { bagDataType } from "../bag/types";

export const QUANTITY_OF_WISHLIST = "QUANTITY_OF_WISHLIST";
export const ADD_GOOD_IN_WISHLIST = "ADD_GOOD_IN_WISHLIST";
export const REMOVE_GOOD_FROM_WISHLIST = "REMOVE_GOOD_FROM_WISHLIST";
export const CLEAR_WISHLIST = "CLEAR_WISHLIST";

export type ActionType = {
  type:
    | typeof QUANTITY_OF_WISHLIST
    | typeof ADD_GOOD_IN_WISHLIST
    | typeof REMOVE_GOOD_FROM_WISHLIST
    | typeof CLEAR_WISHLIST;
  payload?: bagDataType | bagDataType[] | number | null;
};

export type WishListPayloadType = StateType;

export type StateType = {
  quantity: number;
  data: bagDataType[];
};

export type WishListStateType = {
  wishList: StateType;
};

export const initialWishListState = {
  quantity: 0,
  data: getFromLocalStorage("wishlist"),
};
