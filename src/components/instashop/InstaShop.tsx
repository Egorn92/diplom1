import { memo } from "react";
import { en_US } from "../../locale/en_US";
import { Link } from "react-router-dom";
import { ShopPreview } from "./ShopPreview";
import { InstaShopSection, InstaShopTitle, LinkArrow } from "./styles";

export const InstaShop = memo(() => {
  return (
    <InstaShopSection>
      <Link to="/home">
        <InstaShopTitle>{en_US.links.instaShop}</InstaShopTitle>
      </Link>
      <Link to="/home">
        <InstaShopTitle>{en_US.links.shop}</InstaShopTitle>
        <LinkArrow />
      </Link>
      <ShopPreview />
      <Link to="/home">
        <InstaShopTitle>{en_US.links.hashtag}</InstaShopTitle>
      </Link>
    </InstaShopSection>
  );
});
