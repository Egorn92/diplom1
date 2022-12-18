import { initialProductsState } from "../redux/products/types";
import { initialSearchingValueState } from "../redux/search/types";
import { initialsignUpState } from "../redux/signUp-signIn/types";
import { initialBagState } from "../redux/bag/types";
import { initialWishListState } from "../redux/wishList/types";

export const initialState = {
  products: initialProductsState,
  searchingValue: initialSearchingValueState,
  signUp: initialsignUpState,
  bag: initialBagState,
  wishList: initialWishListState,
};
