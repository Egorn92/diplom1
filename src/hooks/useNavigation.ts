import { useState, useContext, useLayoutEffect } from "react";
import { AuthContext } from "../context/authContext";
import { useSelector } from "react-redux";
import { goodQuantitySelector } from "../redux/bag/selectors";
import { auth } from "../firebase/firebase";

export const useNavigation = () => {
  const items = useSelector(goodQuantitySelector);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);
  const { isUserIn } = useContext(AuthContext);

  const handleSize = () => {
    setWidth(window.innerWidth);
  };

  useLayoutEffect(() => {
    handleSize();
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  const handleClickSearch = () => {
    setSearchOpen((current) => !current);
  };

  const handleClickSignOut = () => {
    auth.signOut();
  };

  return {
    items,
    searchOpen,
    isUserIn,
    handleClickSearch,
    handleClickSignOut,
    width,
  };
};
