import { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { auth } from "../../firebase/firebase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { en_US } from "../../locale/en_US";
import { StyledHamburgerMenu, HamburgerMenuBtn } from "./styles";
export const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const { isUserIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = () => {
    setOpen((current) => !current);
  };

  return (
    <StyledHamburgerMenu>
      {/* <!-- Верхний слой --> */}
      <div
        id="myNav"
        className="overlay"
        style={{ width: isOpen ? "100%" : "0%" }}
      >
        {/* <!-- Кнопка для закрытия навигации наложения --> */}
        <button className="closebtn" onClick={handleClick} />

        {/* <!-- Верхний слой содержимого --> */}
        <div className="overlay-content">
          <ul className="list">
            <li className="list__item">
              <Link to="/home">{en_US.navigationLinks.arrivals}</Link>
            </li>
            <li>
              <Link to="/home">{en_US.navigationLinks.shop}</Link>
            </li>
            <li>
              <Link to="/home">{en_US.navigationLinks.collection}</Link>
            </li>
            {!isUserIn ? (
              <button
                className="sign-in-out"
                onClick={() => navigate("/sign-up")}
              >
                {en_US.navigationLinks.signIn}
              </button>
            ) : (
              <button className="sign-in-out" onClick={() => auth.signOut()}>
                {en_US.buttons.signOut}
              </button>
            )}
          </ul>
        </div>
      </div>

      {/* <!-- Используйте любой элемент для открытия / отображения меню навигации наложения --> */}
      <HamburgerMenuBtn onClick={handleClick} />
    </StyledHamburgerMenu>
  );
};
