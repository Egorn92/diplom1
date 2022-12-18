import { memo } from "react";
import { useNavigation } from "../../hooks/useNavigation";
import { en_US } from "../../locale/en_US";
import { Link } from "react-router-dom";
import { SearchPopup } from "../search/SearchPopup";
import {
  NavigationBlackSection,
  NavList,
  NavListItem,
  LogoWhite,
  SearchButtonBlack,
  WishListBtnBlack,
} from "./styles";

export const NavigationBlack = memo(() => {
  const { items, searchOpen, isUserIn, handleClickSearch, handleClickSignOut } =
    useNavigation();

  return (
    <div className="container">
      {searchOpen && <SearchPopup />}
      <NavigationBlackSection>
        <NavList>
          <NavListItem>
            <Link to="/home">{en_US.navigationLinks.arrivals}</Link>
          </NavListItem>
          <NavListItem>
            <Link to="/home">{en_US.navigationLinks.shop}</Link>
          </NavListItem>
          <NavListItem>
            <Link to="/home">{en_US.navigationLinks.collection}</Link>
          </NavListItem>
        </NavList>
        <Link to="/home">
          <LogoWhite>{en_US.logo}</LogoWhite>
        </Link>
        <NavList>
          <NavListItem>
            <SearchButtonBlack onClick={handleClickSearch}>
              {en_US.navigationLinks.search}
            </SearchButtonBlack>
          </NavListItem>
          <NavListItem>
            {!isUserIn ? (
              <Link to="/sign-up">{en_US.navigationLinks.signIn}</Link>
            ) : (
              <button className="sign-out black" onClick={handleClickSignOut}>
                {en_US.buttons.signOut}
              </button>
            )}
          </NavListItem>
          <NavListItem>
            {!isUserIn ? (
              <Link to="/sign-up">{en_US.navigationLinks.bag}</Link>
            ) : (
              <Link to="/bag">
                {items
                  ? en_US.navigationLinks.bag + " (" + items + ")"
                  : en_US.navigationLinks.bag}
              </Link>
            )}
          </NavListItem>
          <NavListItem>
            {!isUserIn ? (
              <Link to="/sign-up">
                <WishListBtnBlack />
              </Link>
            ) : (
              <Link to="/wish-list">
                <WishListBtnBlack />
              </Link>
            )}
          </NavListItem>
        </NavList>
      </NavigationBlackSection>
    </div>
  );
});
