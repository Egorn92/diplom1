import axios from "axios";

const defaultConfig = {
  baseURL: "https://modnikky-api.herokuapp.com/api",
  "Content-Type": "aplication/json",
};

export const createInstanse = (config = {}) => {
  const newConfig = {
    ...config,
    ...defaultConfig,
  };

  const instanse = axios.create(newConfig);
  return instanse;
};
