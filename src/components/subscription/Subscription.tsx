import { memo } from "react";
import { useSubscribeOnNews } from "../../hooks/useSubscribeOnNews";
import { en_US } from "../../locale/en_US";
import {
  SubscriptionSection,
  Title,
  PromoText,
  Form,
  FornInput,
  FormButton,
  Resolve,
} from "./styles";

export const Subscription = memo(() => {
  const { resolve, handleChange, handleSubmit } = useSubscribeOnNews();
  return !resolve ? (
    <SubscriptionSection className="section">
      <Title>{en_US.sectionTitles.subscription}</Title>
      <PromoText>{en_US.inscriptions.subscription}</PromoText>
      <Form onSubmit={handleSubmit}>
        <FornInput
          type="email"
          placeholder={en_US.inputPlaceholders.yourEmail}
          onChange={handleChange}
        />
        <FormButton>{en_US.buttons.join}</FormButton>
      </Form>
    </SubscriptionSection>
  ) : (
    <Resolve className="section">{resolve}!</Resolve>
  );
});
