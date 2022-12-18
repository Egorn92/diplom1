import { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { parseString } from "../tools/parseString";
import { buildConfig } from "../components/product/config";
import { actionAddGood } from "../redux/bag/actions";
import { actionAddWishList } from "../redux/wishList/actions";
import { wishListDataSelector } from "../redux/wishList/selectors";
import { ProductType } from "../redux/products/types";

export const useProduct = (state: ProductType) => {
  const { id, name, price, color, availableSizes, description, images } = state;

  const { isUserIn } = useContext(AuthContext);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishListData = useSelector(wishListDataSelector);

  const sizeArr: any = parseString(availableSizes);
  const config = buildConfig(description);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishListData));
  }, [wishListData]);

  const handleClickAddToBag = () => {
    isUserIn ? dispatch(actionAddGood(state)) : navigate("/sign-up");
  };

  const handleClickWishList = () => {
    const wishListItem = {
      id: id,
      name: name,
      price: price,
      color: color,
      availableSizes: availableSizes,
      description: description,
      images: images,
    };

    isUserIn ? dispatch(actionAddWishList(wishListItem)) : navigate("/sign-up");
  };

  return {
    id,
    name,
    price,
    color,
    description,
    images,
    handleClickAddToBag,
    handleClickWishList,
    sizeArr,
    config,
  };
};
