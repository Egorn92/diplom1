import styled from "styled-components";
import { LightTheme } from "../../styles/Themes";
import hamburgerMenuIcon from "../../assets/icons/UI/hamburger-menu-icon.svg";
import closeIcon from "../../assets/icons/UI/close-search-bnt.svg";

export const StyledHamburgerMenu = styled.div`
  /* Наложение (фон) */
  .overlay {
    /* Высота и ширина зависят от того, как вы хотите показать наложение (см. JS ниже) */
    height: 100%;
    width: 0;
    position: fixed; /* Оставаться на месте */
    z-index: 10; /* Сидеть на вершине */
    left: 0;
    top: 0;
    background-color: rgb(0, 0, 0); /* Черный резервный цвет */
    background-color: ${LightTheme.colors.darkGray};
    /*Черный с непрозрачностью */
    overflow-x: hidden; /* Отключить горизонтальную прокрутку */
    transition: 0.5s; /* 0.5 секунды эффект перехода, чтобы скользить в или скользить вниз по наложению (высота или ширина, в зависимости от показа) */
  }

  /* Расположите содержимое внутри наложения */
  .overlay-content {
    position: relative;
    top: 25%; /* 25% сверху */
    width: 100%; /* 100% ширина */
    text-align: center; /* Центрированный текст/ссылки */
    margin-top: 30px; /* 30px верхнее поле, чтобы избежать конфликта с кнопкой закрытия на небольших экранах */
  }

  .list .list__item :not(:last) {
    color: red;
  }

  /* Навигационные ссылки внутри наложения */
  .overlay a {
    padding: 8px;
    margin: 20px 0;
    text-decoration: none;
    font-size: ${LightTheme.fontSizes.xxl};
    color: ${LightTheme.colors.generalWhite};
    font-weight: ${LightTheme.fontWeight.regular};
    display: block; /* Блок дисплея вместо встроенного */
    transition: 0.3s; /* Эффекты перехода при наведении (цвет) */
  }

  /* При наведении курсора мыши на навигационные ссылки измените их цвет */
  .overlay a:hover,
  .overlay a:focus {
    color: #f1f1f1;
  }

  .overlay .sign-in-out {
    width: 80%;
    height: 60px;
    margin-top: 30vh;
    color: ${LightTheme.colors.mainText};
    font-size: ${LightTheme.fontSizes.xl};
  }

  /* Расположите кнопку закрыть (верхний правый угол) */
  .overlay .closebtn {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 30px;
    right: 30px;
    background: center 100% no-repeat url(${closeIcon});
    background-size: 100%;
    @media ${LightTheme.media.xs} {
      width: 40px;
      height: 40px;
      font-size: 40px;
      top: 15px;
      right: 15px;
    }
  }

  /* Если высота экрана меньше 450 пикселей, измените размер шрифта ссылок и снова установите кнопку закрыть, чтобы они не перекрывались */
  @media screen and (max-height: 450px) {
    .overlay a {
      font-size: 20px;
    }
  }
`;
export const HamburgerMenuBtn = styled.button`
  width: 22px;
  height: 16px;
  background: left no-repeat url(${hamburgerMenuIcon});
  background-size: 100%;
`;
