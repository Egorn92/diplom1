import { combineReducers } from "redux";
import { ProductsReducer } from "../redux/products/reducer";
import { SearchingValueReducer } from "../redux/search/reducer";
import { SignInReducer } from "../redux/signUp-signIn/reducer";
import { BagReducer } from "../redux/bag/reducer";
import { WishListReducer } from "../redux/wishList/reducer";

export const reducer = combineReducers({
  products: ProductsReducer,
  searchingValue: SearchingValueReducer,
  signUp: SignInReducer,
  bag: BagReducer,
  wishList: WishListReducer,
});
