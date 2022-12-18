import { useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionInputValue } from "../redux/search/actions";
import { filterData } from "../tools/filterData";
import { dataSelector } from "../redux/products/selectors";

export const useSearchData = () => {
  const data = useSelector(dataSelector);
  const dispatch = useDispatch();
  const [closeSearch, setCloseSearch] = useState<boolean>(true);

  const handleClick = () => {
    setCloseSearch((current: boolean) => !current);
    dispatch(actionInputValue(undefined));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (data) {
      const filterdata = filterData(data, event.target.value);

      dispatch(actionInputValue(filterdata));
    }
  };

  return { closeSearch, handleClick, handleChange };
};
