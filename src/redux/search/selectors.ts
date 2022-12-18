import { searchingValueStateType } from "./types";

export const searchingValueSelector = (state: searchingValueStateType) =>
  state.searchingValue.value;
