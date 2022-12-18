import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import { AuthContextProvider } from "./context/authContextProvider";
// import firebase from "./firebase/firebase";
// import { createContext } from "react";

// import { en_US } from "./locale/en_US";
// import { ru_RU } from "./locale/ru_RU";
// import { chooseLocale } from "./tools/chooseLocale";
// import intl from "intl";
// import { IntlProvider } from "react-intl";
// function addLocaleDate([...en, ...ru]);

// export const Context = createContext({
//   database: [],
//   auth: null,
//   firestore: [],
// });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    {/* <IntlProvider locale={"en"} messages={en_US} defaultLocale={"en_US"}></IntlProvider> */}
    {/* <Context.Provider value={{ database, auth, firestore }}> */}
    <AuthContextProvider>
      <App />
    </AuthContextProvider>

    {/* </Context.Provider> */}
    {/* </IntlProvider> */}
  </Provider>
);
