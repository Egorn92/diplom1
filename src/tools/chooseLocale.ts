export const chooseLocale = (): string => {
  switch (navigator.language.split("_")[0]) {
    case "en":
      return "en_US";
      break;
    case "ru":
      return "ru_RU";
      break;
    default:
      return "en_US";
      break;
  }
};
