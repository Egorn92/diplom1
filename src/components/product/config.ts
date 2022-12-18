import { en_US } from "../../locale/en_US";

export const buildConfig = (description: string) => {
  const config = [
    {
      title: en_US.other.description,
      text: description,
    },
    {
      title: en_US.other.shipping,
      text: en_US.inscriptions.shipping,
    },
    {
      title: en_US.other.composition,
      text: en_US.inscriptions.composition,
    },
  ];

  return config;
};
