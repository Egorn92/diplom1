import { memo } from "react";
import { en_US } from "../../locale/en_US";
import { ButtonWhite } from "../UI/ButtonWhite";
import { StyledTopSection, Title, SubTitle } from "./styles";

const buttonText = en_US.buttons.arrivals;

export const TopSection = memo(() => {
  return (
    <StyledTopSection>
      <Title>{en_US.topSection.title}</Title>
      <SubTitle>{en_US.topSection.subTitle}</SubTitle>
      <ButtonWhite>{buttonText}</ButtonWhite>
    </StyledTopSection>
  );
});
