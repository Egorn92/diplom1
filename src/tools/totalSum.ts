import { bagDataType } from "../redux/bag/types";

export const totalSum = (arr: bagDataType[]) => {
  const sum = arr.reduce((prev, next) => {
    return prev + Number(next.price.value);
  }, 0);

  return sum;
};
