import { memo } from "react";
import { useProduct } from "../../hooks/useProduct";
import { ProductType } from "../../redux/products/types";
import { ButtonBlack } from "../UI/ButtonBlack";
import { en_US } from "../../locale/en_US";
import {
  ProductSection,
  Photos,
  Photo,
  Description,
  Name,
  Price,
  PreOrder,
  ColorTitle,
  Color,
  SizeTitle,
  Size,
  Buttons,
  AddWishListBtn,
  List,
  ListItem,
  ListIcon,
} from "./styles";

export const Product = memo((state: ProductType) => {
  const {
    name,
    price,
    color,
    images,
    handleClickAddToBag,
    handleClickWishList,
    sizeArr,
    config,
  } = useProduct(state);

  return (
    <ProductSection>
      <Photos>
        {images.map((photo) => {
          return <Photo src={photo} alt={name} key={photo} />;
        })}
      </Photos>
      <Description>
        <Name>{name}</Name>
        <Price key={price.value}>{price.currency + " $" + price.value}</Price>
        <PreOrder>{en_US.other.preorder}</PreOrder>
        <ColorTitle>{en_US.other.color}</ColorTitle>
        <Color bg={color.hex} alt={color.name} disabled title={color.name} />
        <SizeTitle>{en_US.other.size}</SizeTitle>
        {sizeArr.map((size: string) => {
          return <Size key={size}>{size}</Size>;
        })}
        <Buttons>
          <ButtonBlack onClick={handleClickAddToBag}>
            {en_US.buttons.addToBag}
          </ButtonBlack>
          <AddWishListBtn onClick={handleClickWishList} />
        </Buttons>

        {config.map(({ title, text }) => {
          return (
            <List key={title}>
              <ListItem>
                <ListIcon />
                {title}
              </ListItem>
              <p>{text}</p>
            </List>
          );
        })}
      </Description>
    </ProductSection>
  );
});
