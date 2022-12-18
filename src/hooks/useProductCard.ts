import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { actionAddGood } from "../redux/bag/actions";
import { actionAddWishList } from "../redux/wishList/actions";
import { wishListDataSelector } from "../redux/wishList/selectors";
import { bagDataType } from "../redux/bag/types";

export const useProductCard = ({
  id,
  name,
  price,
  color,
  availableSizes,
  description,
  images,
}: bagDataType) => {
  const { isUserIn } = useContext(AuthContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishListData = useSelector(wishListDataSelector);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishListData));
  }, [wishListData]);

  const handleClickAddToBag = () => {
    const productData: bagDataType = {
      id: id,
      name: name,
      price: price,
      color: color,
      availableSizes: availableSizes,
      description: description,
      images: images,
      quantity: 1,
    };

    isUserIn ? dispatch(actionAddGood(productData)) : navigate("/sign-up");
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

  return { handleClickAddToBag, handleClickWishList };
};
