import { useShowBagData } from "../../hooks/useShowBagData";
import { en_US } from "../../locale/en_US";
import { totalSum } from "../../tools/totalSum";
import { parseString } from "../../tools/parseString";
import { ButtonBlack } from "../UI/ButtonBlack";
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
  RemoveBtn,
  TotalSum,
  Payments,
  Maestro,
  Visa,
  Resolve,
} from "./styles";

export const Bag = () => {
  const {
    newData,
    items,
    resolve,
    quantityArr,
    handleClickRemoveItem,
    handleClickСheckout,
  } = useShowBagData();

  return (
    <BagSection>
      <TopBag>
        <BagTitle>
          {en_US.sectionTitles.bag}
          <span>
            {items}
            {en_US.other.items}
          </span>
        </BagTitle>
      </TopBag>
      {!resolve ? (
        <>
          <List>
            {newData &&
              newData.map(
                ({
                  id,
                  name,
                  price,
                  color,
                  availableSizes,
                  images,
                  quantity,
                }) => {
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
                        <RemoveBtn data-id={id} onClick={handleClickRemoveItem}>
                          {en_US.buttons.remove}
                        </RemoveBtn>
                      </ItemDescription>
                    </Item>
                  );
                }
              )}
          </List>
          <TotalSum>
            {en_US.other.totalSum}
            {totalSum(newData)}
          </TotalSum>
          <ButtonBlack onClick={handleClickСheckout}>
            {en_US.buttons.checkout}
          </ButtonBlack>
          <Payments>
            <Maestro />
            <Visa />
          </Payments>
        </>
      ) : (
        <Resolve className="section">{resolve}</Resolve>
      )}
    </BagSection>
  );
};
