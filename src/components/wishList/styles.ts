import styled from "styled-components";
import { LightTheme } from "../../styles/Themes";
import removeIcon from "../../assets/icons/UI/remove-icon.svg";
import addIcon from "../../assets/icons/UI/plus-icon.svg";

export const BagSection = styled.section`
  width: 526px;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopBag = styled.div`
  width: 100%;
  height: 35px;
  margin-top: 10px;
  border-bottom: 1px solid ${LightTheme.colors.lightGray};
`;

export const BagTitle = styled.h3`
  display: inline-block;
  color: ${LightTheme.colors.mainText};
  font-size: ${LightTheme.fontSizes.md};
  font-weight: ${LightTheme.fontWeight.regular};

  span {
    margin-left: 20px;
    color: ${LightTheme.colors.secondaryText};
    font-size: ${LightTheme.fontSizes.xxxs};
  }
`;

export const List = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Item = styled.li`
  height: 317px;
  padding: 30px 0;
  display: flex;
  border-bottom: 1px solid ${LightTheme.colors.lightGray};
`;

export const Photo = styled.img`
  width: 160px;
  height: 230px;
`;

export const ItemDescription = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h4`
  margin-bottom: 10px;
  color: ${LightTheme.colors.mainText};
  font-size: ${LightTheme.fontSizes.xs};
  font-weight: ${LightTheme.fontWeight.regular};
`;

export const Price = styled.p`
  margin-bottom: 30px;
  color: ${LightTheme.colors.mainText};
  font-size: ${LightTheme.fontSizes.xxxs};
  font-weight: ${LightTheme.fontWeight.regular};
`;

export const Params = styled.p`
  margin-bottom: 18px;
  color: ${LightTheme.colors.mainText};
  font-size: ${LightTheme.fontSizes.xxxs};
  font-weight: ${LightTheme.fontWeight.regular};
  select {
    width: 62px;
    height: 16px;
    margin-left: 5px;
    color: ${LightTheme.colors.mainText};
    font-size: ${LightTheme.fontSizes.xxxs};
    font-weight: ${LightTheme.fontWeight.regular};
    border: none;
    :focus {
      outline: none;
    }
  }
`;

export const MenuBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const RemoveBtn = styled.button`
  width: 71px;
  margin-top: 50px;
  align-self: flex-end;
  color: ${LightTheme.colors.mainText};
  font-size: ${LightTheme.fontSizes.xxxs};
  font-weight: ${LightTheme.fontWeight.regular};
  text-align: right;
  background-color: none;
  background: left no-repeat url(${removeIcon});
  background-size: 12px;
`;

export const AddToBagBtn = styled.button`
  position: relative;
  width: 91px;
  margin-top: 50px;
  align-self: flex-end;
  color: ${LightTheme.colors.mainText};
  font-size: ${LightTheme.fontSizes.xxxs};
  font-weight: ${LightTheme.fontWeight.regular};
  text-align: right;
  background-color: none;
  background: left no-repeat url(${addIcon});
  background-size: 14px;
`;
