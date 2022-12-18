import { memo } from "react";
import { useNavigation } from "../../hooks/useNavigation";
import { en_US } from "../../locale/en_US";
import { Link } from "react-router-dom";
import { SearchPopup } from "../search/SearchPopup";
import { HamburgerMenu } from "../hamburgerMenu/HamburgerMenu";
import {
  NavigationWhiteSection,
  NavList,
  NavListItem,
  LogoWhite,
  SearchButtonWhite,
  WishListBtnWhite,
  BagButton,
  ItemsCircle,
} from "./styles";

export const NavigationWhite = memo(() => {
  const {
    items,
    searchOpen,
    isUserIn,
    handleClickSearch,
    handleClickSignOut,
    width,
  } = useNavigation();

  return (
    <div className="container">
      {searchOpen && <SearchPopup />}
      <NavigationWhiteSection>
        {width <= 868 && <HamburgerMenu />}
        {width > 868 && (
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
        )}
        <Link to="/home">
          <LogoWhite>{en_US.logo}</LogoWhite>
        </Link>
        <NavList>
          <NavListItem>
            <SearchButtonWhite onClick={handleClickSearch}>
              {width > 576 ? en_US.navigationLinks.search : ""}
            </SearchButtonWhite>
          </NavListItem>
          {width > 576 && (
            <NavListItem>
              {!isUserIn ? (
                <Link to="/sign-up">{en_US.navigationLinks.signIn}</Link>
              ) : (
                <button className="sign-out" onClick={handleClickSignOut}>
                  {en_US.buttons.signOut}
                </button>
              )}
            </NavListItem>
          )}

          {width > 576 ? (
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
          ) : (
            <>
              {!isUserIn ? (
                <Link to="/sign-up">
                  <BagButton />
                </Link>
              ) : (
                <Link to="/bag">
                  <BagButton style={{ bottom: items > 0 ? "6px" : "0px" }}>
                    {items > 0 && (
                      <ItemsCircle className="items">{items}</ItemsCircle>
                    )}
                  </BagButton>
                </Link>
              )}
            </>
          )}

          <NavListItem>
            {!isUserIn ? (
              <Link to="/sign-up">
                <WishListBtnWhite />
              </Link>
            ) : (
              <Link to="/wish-list">
                <WishListBtnWhite />
              </Link>
            )}
          </NavListItem>
        </NavList>
      </NavigationWhiteSection>
    </div>
  );
});
