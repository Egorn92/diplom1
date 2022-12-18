export const QUANTITY_OF_GOODS = "QUANTITY_OF_GOODS";
export const ADD_GOOD_IN_BAG = "ADD_GOOD_IN_BAG";
export const REMOVE_GOOD_FROM_BAG = "REMOVE_GOOD_FROM_BAG";
export const CLEAR_BAG = "CLEAR_BAG";

export type ActionType = {
  type:
    | typeof QUANTITY_OF_GOODS
    | typeof ADD_GOOD_IN_BAG
    | typeof REMOVE_GOOD_FROM_BAG
    | typeof CLEAR_BAG;
  payload?: bagDataType | bagDataType[] | number | null;
};

export type BagPayloadType = StateType;

export type StateType = {
  quantity: number;
  data: bagDataType[];
};

export type BagStateType = {
  bag: StateType;
};

export const initialBagState = {
  quantity: 0,
  data: [],
};
export type bagDataType = {
  id: string;
  name: string;
  images: string[];
  price: {
    currency: string;
    value: string;
  };
  color: {
    name: string;
    hex: string;
  };
  availableSizes: string[];
  description: string;
  quantity?: number;
};
