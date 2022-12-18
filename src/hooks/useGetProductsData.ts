import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataSelector } from "../redux/products/selectors";
import { actionGetProductsRequested } from "../redux/products/actions";

export const useGetProductsData = () => {
  const dispatch = useDispatch();
  const data = useSelector(dataSelector);

  const GetProductsData = () => {
    useEffect(() => {
      data === null && dispatch(actionGetProductsRequested());
    }, [data]);

    return data;
  };

  return GetProductsData;
};
