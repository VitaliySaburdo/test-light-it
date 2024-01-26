import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProductDetails } from "./pages/ProductDetails";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:productId" element={<ProductDetails />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
