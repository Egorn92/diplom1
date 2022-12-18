import { memo } from "react";
import {
  Preview,
  BlackBlousePhoto,
  BlackTopBackPhoto,
  BlackTopFrontPhoto,
  GraySuitPhoto,
  StripedSweaterPhoto,
} from "./styles";
import blackBlouseImg from "../../assets/instargram-shop/black-blouse.png";
import blackTopBackImg from "../../assets/instargram-shop/black-top-back.png";
import blackTopFrontImg from "../../assets/instargram-shop/black-top-front.png";
import graySuitImg from "../../assets/instargram-shop/gray-suit.png";
import stripedSweaterImg from "../../assets/instargram-shop/striped-sweater.png";

export const ShopPreview = memo(() => {
  return (
    <Preview>
      <BlackBlousePhoto src={blackBlouseImg} alt="Girl in Black Blouse" />
      <StripedSweaterPhoto
        src={stripedSweaterImg}
        alt="Girl in Striped Sweater"
      />
      <BlackTopBackPhoto src={blackTopBackImg} alt="Girl in Black Top" />
      <BlackTopFrontPhoto src={blackTopFrontImg} alt="Girl in Black Top" />
      <GraySuitPhoto src={graySuitImg} alt="Girl in Gray Suit" />
    </Preview>
  );
});
