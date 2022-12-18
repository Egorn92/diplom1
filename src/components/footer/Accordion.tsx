import { FooterMenuMobileSection, Minus, MainMenu } from "./styles";
import { useState } from "react";

type AccordionType = {
  title: string;
  items: any[];
};

export const Accordion = ({ title, items }: AccordionType) => {
  const [isOpen, setOpen] = useState<number>(0);
  const handleClick = () => {
    isOpen === 0 ? setOpen(1) : setOpen(0);
  };

  return (
    <div className="wrapper" key={title}>
      <div className="plus-line-width" />
      <Minus className="plus-line-height" isOpen={isOpen} />
      <h4 onClick={handleClick}>{title}</h4>
      {isOpen === 1 && (
        <MainMenu isOpen={isOpen}>
          {items.map(({ item }) => {
            return (
              <a href="#" key={item}>
                {item}
              </a>
            );
          })}
        </MainMenu>
      )}
    </div>
  );
};
