import {
  SEARCHING_VALUE,
  StateType,
  initialSearchingValueState,
  ActionType,
} from "./types";

export const SearchingValueReducer = (
  state: StateType = initialSearchingValueState,
  action: ActionType
) => {
  switch (action.type) {
    case SEARCHING_VALUE:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};
