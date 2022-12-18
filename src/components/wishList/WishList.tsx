import { en_US } from "../../locale/en_US";
import { useSelector, useDispatch } from "react-redux";
import { bagDataType } from "../../redux/bag/types";
import { useEffect, useState } from "react";
import { parseString } from "../../tools/parseString";
import { getFromLocalStorage } from "../../tools/getFromLocalStorage";
import { actionAddGood } from "../../redux/bag/actions";
import {
  BagSection,
  TopBag,
  BagTitle,
  List,
  Item,
  Photo,
  ItemDescription,
  Name,
  Price,
  Params,
  MenuBottom,
  RemoveBtn,
  AddToBagBtn,
} from "./styles";
import {
  wishListDataSelector,
  wishListQuantitySelector,
} from "../../redux/wishList/selectors";
import { dataSelector } from "../../redux/products/selectors";
import { actionRemoveWishList } from "../../redux/wishList/actions";

export const WishList = () => {
  const dispatch = useDispatch();
  const data = useSelector(wishListDataSelector);
  const items = data.length;

  const quantityArr = ["1", "2", "3", "4", "5"];

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(data));
    //   const used: any = {};
    // setNewData(
    // data
    // .filter((obj: bagDataType) => {
    //   if (obj.id in used) {
    //     return false;
    //   } else {
    //     return (used[obj.id] = true);
    //   }
    // })
    // );
  }, [data]);

  const handleClickRemoveItem = (e: any) => {
    data &&
      dispatch(
        actionRemoveWishList(
          data.filter((product) => {
            if (product.id !== e.target.dataset.id) return 1;
          })
        )
      );
  };
  const handleClickAddToBag = (e: any) => {
    const wishListItem =
      data && data.find((product) => product.id === e.target.dataset.id);
    wishListItem && dispatch(actionAddGood(wishListItem));
  };

  return (
    <BagSection>
      <TopBag>
        <BagTitle>
          {en_US.sectionTitles.wishList}
          <span>
            {items}
            {en_US.other.items}
          </span>
        </BagTitle>
      </TopBag>
      <List>
        {data &&
          data.map(
            ({ id, name, price, color, availableSizes, images, quantity }) => {
              const sizeArr: any = parseString(availableSizes);
              return (
                <Item key={id}>
                  <Photo src={images[0]} alt={name} />
                  <ItemDescription>
                    <Name>{name}</Name>
                    <Price>
                      {price.currency} {price.value}
                    </Price>
                    <Params>
                      {en_US.other.color}:
                      <select>
                        <option disabled defaultValue="Choose a color">
                          Choose a color
                        </option>
                        <option value={color.name}>{color.name}</option>
                      </select>
                    </Params>
                    <Params>
                      {en_US.other.size}:
                      <select>
                        <option disabled defaultValue="Choose a size">
                          Choose a size
                        </option>
                        {sizeArr.map((size: string) => {
                          return (
                            <option key={size} value={size}>
                              {size}
                            </option>
                          );
                        })}
                      </select>
                    </Params>
                    <Params>
                      {en_US.other.quantity}:
                      <select>
                        <option disabled defaultValue="Choose a quantity">
                          Choose a quantity
                        </option>
                        {quantityArr.map((num: string) => {
                          return (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          );
                        })}
                      </select>
                    </Params>
                    <MenuBottom>
                      <AddToBagBtn data-id={id} onClick={handleClickAddToBag}>
                        {en_US.buttons.addToBag}
                      </AddToBagBtn>
                      <RemoveBtn data-id={id} onClick={handleClickRemoveItem}>
                        {en_US.buttons.remove}
                      </RemoveBtn>
                    </MenuBottom>
                  </ItemDescription>
                </Item>
              );
            }
          )}
      </List>
    </BagSection>
  );
};
