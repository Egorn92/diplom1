import styled from "styled-components";
import { LightTheme } from "../../styles/Themes";

export const SubscriptionSection = styled.section`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h4`
  margin-bottom: 16px;
  color: ${LightTheme.colors.mainText};
  font-size: ${LightTheme.fontSizes.xs};
  font-weight: ${LightTheme.fontWeight.regular};
`;

export const PromoText = styled.p`
  margin-bottom: 40px;
  color: ${LightTheme.colors.mainText};
  font-size: ${LightTheme.fontSizes.xxxs};
  font-weight: ${LightTheme.fontWeight.regular};

  @media ${LightTheme.media.sm} {
    text-align: center;
  }
`;

export const Form = styled.form`
  width: 400px;
  border-bottom: 1px solid ${LightTheme.colors.lightGray};
  @media ${LightTheme.media.sm} {
    max-width: auto;
    width: 100%;
  }
`;

export const FornInput = styled.input`
  width: 360px;
  line-height: 24px;
  border: none;
  :focus {
    outline: none;
  }
  ::placeholder {
    font-size: xx-small;
  }
  @media ${LightTheme.media.sm} {
    max-width: auto;
    width: 89%;
  }
`;

export const FormButton = styled.button`
  padding: 0 2px;
  color: ${LightTheme.colors.mainText};
  font-size: ${LightTheme.fontSizes.xs};
  font-weight: ${LightTheme.fontWeight.regular};
  line-height: 24px;
  background: none;
  @media ${LightTheme.media.sm} {
    font-size: ${LightTheme.fontSizes.xxxs};
  }
`;

export const Resolve = styled.div`
  text-align: center;
  color: ${LightTheme.colors.mainText};
  font-size: ${LightTheme.fontSizes.xs};
  font-weight: ${LightTheme.fontWeight.regular};
`;
