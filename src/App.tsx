import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "./styles/Themes";
import { GlobalStyles } from "./styles/GlobalStyles";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import { SignUpPage } from "./pages/SignUpPage";
import { SignInPage } from "./pages/SignInPage";
import { BagPage } from "./pages/BagPage";
import { WishListPage } from "./pages/WishListPage";

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/bag" element={<BagPage />} />
          <Route path="/wish-list" element={<WishListPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
