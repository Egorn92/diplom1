import { memo } from "react";
import { Link } from "react-router-dom";
import { Subscription } from "../subscription/Subscription";
import { useNavigation } from "../../hooks/useNavigation";
import { FooterMenuMobile } from "./FooterMenuMobile";
import { config } from "./config";
import { FooterSection, FooterMenu, Items, ItemTitle, Item } from "./styles";

export const Footer = memo(() => {
  const { width } = useNavigation();
  return (
    <FooterSection>
      <Subscription />
      {width <= 576 ? (
        <FooterMenuMobile />
      ) : (
        <FooterMenu>
          {config.map(({ title, items }) => {
            return (
              <Items key={title}>
                <Link to="/home">
                  <ItemTitle>{title}</ItemTitle>
                </Link>
                {items.map(({ item }) => {
                  return (
                    <Item key={item}>
                      <Link to="/home">{item}</Link>
                    </Item>
                  );
                })}
              </Items>
            );
          })}
        </FooterMenu>
      )}
    </FooterSection>
  );
});
