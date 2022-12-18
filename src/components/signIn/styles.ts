import styled from "styled-components";
import { LightTheme } from "../../styles/Themes";
import closeIcon from "../../assets/icons/UI/remove-icon.svg";
import checkBoxIcon from "../../assets/icons/UI/checkbox-icon.svg";
import { Link } from "react-router-dom";

export const StyledForm = styled.form`
  width: 498px;
  height: 562px;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${LightTheme.colors.generalWhite};
  transform: translateY(25%);

  .medium {
    margin-top: 70px;
    margin-bottom: 150px;
    width: 100%;
  }
`;

export const FormTop = styled.div`
  width: 100%;
  margin-bottom: 56px;
  display: flex;
  justify-content: space-between;
`;

export const FormTitle = styled.h3`
  color: ${LightTheme.colors.mainText};
  font-size: ${LightTheme.fontSizes.xs};
  font-weight: ${LightTheme.fontWeight.regular};
`;

export const CloseBtn = styled.button`
  width: 16px;
  height: 16px;
  background-color: none;
  background: no-repeat center url(${closeIcon});
  background-size: 100%;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 52px;
  padding: 20px 0 10px 0;
  border: none;
  border-bottom: 1px solid ${LightTheme.colors.lightGray};
  ::placeholder {
    color: ${LightTheme.colors.secondaryText};
    font-size: ${LightTheme.fontSizes.xxxs};
  }
  :focus {
    outline: none;
  }
`;

export const Confirmation = styled.div`
  margin: 30px 0 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  label {
    color: ${LightTheme.colors.mainText};
    font-size: ${LightTheme.fontSizes.xxxs};
    line-height: ${LightTheme.fontSizes.sm};
  }
  .custom-checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  .custom-checkbox + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }
  .custom-checkbox + label::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 2px solid ${LightTheme.colors.mainText};
    margin-right: 10px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }
  .custom-checkbox:checked + label::before {
    border: 2px solid ${LightTheme.colors.mainText};
    background-color: ${LightTheme.colors.mainText};
    background-image: url(${checkBoxIcon});
    background-size: contain;
  }
  .custom-checkbox:not(:disabled):not(:checked) + label:hover::before {
    border-color: ${LightTheme.colors.mainText};
  }
  .custom-checkbox:not(:disabled):active + label::before {
    background-color: ${LightTheme.colors.mainText};
    border-color: ${LightTheme.colors.mainText};
  }
  .custom-checkbox:disabled + label::before {
    background-color: ${LightTheme.colors.mainText};
  }
`;

export const StyledInscription = styled.p`
  margin-bottom: 30px;
  align-self: flex-start;
  color: ${LightTheme.colors.secondaryText};
  font-size: ${LightTheme.fontSizes.xxxs};
  span {
    color: ${LightTheme.colors.mainText};
    text-decoration: underline;
  }
`;

export const StyledLink = styled(Link)`
  margin-top: 30px;
  color: ${LightTheme.colors.mainText};
  font-size: ${LightTheme.fontSizes.xxxs};
  text-decoration: underline;
  align-self: flex-start;
`;
