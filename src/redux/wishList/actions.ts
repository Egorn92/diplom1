import { bagDataType } from "../bag/types";
import {
  ADD_GOOD_IN_WISHLIST,
  REMOVE_GOOD_FROM_WISHLIST,
  CLEAR_WISHLIST,
  ActionType,
} from "./types";

export const actionAddWishList = (data: bagDataType): ActionType => ({
  type: ADD_GOOD_IN_WISHLIST,
  payload: data,
});

export const actionRemoveWishList = (data: bagDataType[]): ActionType => ({
  type: REMOVE_GOOD_FROM_WISHLIST,
  payload: data,
});

export const actionClearWishList = (): ActionType => ({
  type: CLEAR_WISHLIST,
});
