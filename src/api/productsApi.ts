import { createInstanse } from "./instatse";

const api = createInstanse();

export const getProductsData = async () => {
  const { data } = await api.get("/catalog");
  return data;
};

export const postCartData = async (order: {}) => {
  const response = await api.post("/cart", order);
  const data = await response.data;
  return {
    resolve: data.message,
  };
};

export const postNewsSubscription = async (email: {}) => {
  const response = await api.post("subscription", email);
  const data = await response.data;
  return {
    resolve: data.message,
  };
};
