import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ProductList } from "./components/ProductList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:productId" />
      </Routes>
    </>
  );
}

export default App;
