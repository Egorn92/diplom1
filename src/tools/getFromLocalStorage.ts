export const getFromLocalStorage = (key: string) => {
  const JSONdata = localStorage.getItem(key);
  let data: any;
  JSONdata ? (data = JSON.parse(JSONdata)) : (data = []);
  return data;
};
