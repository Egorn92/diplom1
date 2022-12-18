import {
  ADD_GOOD_IN_BAG,
  REMOVE_GOOD_FROM_BAG,
  CLEAR_BAG,
  ActionType,
  bagDataType,
} from "./types";

export const actionAddGood = (data: bagDataType): ActionType => ({
  type: ADD_GOOD_IN_BAG,
  payload: data,
});

export const actionRemoveGood = (data: bagDataType[]): ActionType => ({
  type: REMOVE_GOOD_FROM_BAG,
  payload: data,
});

export const actionClearBag = (): ActionType => ({
  type: CLEAR_BAG,
});
