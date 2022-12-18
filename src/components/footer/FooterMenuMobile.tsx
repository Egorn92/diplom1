import { useState } from "react";
import { Link } from "react-router-dom";
import { config } from "./config";
import { Accordion } from "./Accordion";
import { FooterMenuMobileSection, Minus, MainMenu } from "./styles";

export const FooterMenuMobile = () => {
  return (
    <FooterMenuMobileSection>
      {config.map(({ title, items }) => {
        return <Accordion title={title} items={items} />;
      })}
    </FooterMenuMobileSection>
  );
};
