import { WishListStateType } from "./types";

export const wishListDataSelector = (state: WishListStateType) =>
  state.wishList.data;
export const wishListQuantitySelector = (state: WishListStateType) =>
  state.wishList.quantity;
