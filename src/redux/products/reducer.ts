import {
  ActionType,
  REQUEST_PRODUCTS,
  REQUEST_PRODUCTS_SUCCEED,
  REQUEST_PRODUCTS_FAILED,
  CLEAR_PRODUCTS_DATA,
  StateType,
  initialProductsState,
} from "./types";

export const ProductsReducer = (
  state: StateType = initialProductsState,
  action: ActionType
) => {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return {
        ...state,
        data: state.data,
        error: state.error,
        isLoading: true,
      };
    case REQUEST_PRODUCTS_SUCCEED:
      return {
        ...state,

        data: action.payload,
        error: state.error,
        isLoading: false,
      };
    case REQUEST_PRODUCTS_FAILED:
      return {
        ...state,

        data: state.data,
        error: action.payload,
        isLoading: false,
      };
    case CLEAR_PRODUCTS_DATA:
      return initialProductsState;
    default:
      return state;
  }
};
