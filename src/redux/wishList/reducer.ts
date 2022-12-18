import {
  ADD_GOOD_IN_WISHLIST,
  REMOVE_GOOD_FROM_WISHLIST,
  CLEAR_WISHLIST,
  ActionType,
  StateType,
  initialWishListState,
} from "./types";

export const WishListReducer = (
  state: StateType = initialWishListState,
  action: ActionType
) => {
  switch (action.type) {
    case ADD_GOOD_IN_WISHLIST:
      return {
        ...state,
        data: [...state.data, action.payload],
        quantity: state.quantity + 1,
      };
    case REMOVE_GOOD_FROM_WISHLIST:
      return {
        ...state,
        data: action.payload,
        quantity: state.quantity - 1,
      };
    case CLEAR_WISHLIST:
      return initialWishListState;
    default:
      return state;
  }
};
