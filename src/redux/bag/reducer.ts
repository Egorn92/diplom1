import {
  ADD_GOOD_IN_BAG,
  REMOVE_GOOD_FROM_BAG,
  CLEAR_BAG,
  ActionType,
  StateType,
  initialBagState,
} from "./types";

export const BagReducer = (
  state: StateType = initialBagState,
  action: ActionType
) => {
  switch (action.type) {
    case ADD_GOOD_IN_BAG:
      return {
        ...state,
        data: [...state.data, action.payload],
        quantity: state.quantity + 1,
      };
    case REMOVE_GOOD_FROM_BAG:
      return {
        ...state,
        data: action.payload,
        quantity: state.quantity - 1,
      };
    case CLEAR_BAG:
      return initialBagState;
    default:
      return state;
  }
};
