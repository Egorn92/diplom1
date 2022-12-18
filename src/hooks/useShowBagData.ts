import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bagDataSelector, goodQuantitySelector } from "../redux/bag/selectors";
import { actionRemoveGood, actionClearBag } from "../redux/bag/actions";
import { bagDataType } from "../redux/bag/types";
import { postCartData } from "../api/productsApi";

export const useShowBagData = () => {
  const dispatch = useDispatch();
  const data = useSelector(bagDataSelector);
  const items = useSelector(goodQuantitySelector);
  const [newData, setNewData] = useState<bagDataType[]>([]);
  const [resolve, setResolve] = useState<string | null>(null);
  const quantityArr = ["1", "2", "3", "4", "5"];

  useEffect(() => {
    const used: any = {};
    setNewData(
      data.filter((obj: bagDataType) => {
        if (obj.id in used) {
          return false;
        } else {
          return (used[obj.id] = true);
        }
      })
    );
  }, [data]);

  const handleClickRemoveItem = (e: any) => {
    dispatch(
      actionRemoveGood(
        data.filter((product) => {
          if (product.id !== e.target.dataset.id) return 1;
        })
      )
    );
  };
  const handleClickСheckout = async () => {
    const orderArr = newData.map((item) => {
      return item.id;
    });
    const order = {
      products: orderArr,
    };
    const result = await postCartData(order);
    dispatch(actionClearBag());
    setResolve(result.resolve);
  };

  return {
    newData,
    items,
    resolve,
    quantityArr,
    handleClickRemoveItem,
    handleClickСheckout,
  };
};
