import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ProductList } from "./components/ProductList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/:productId" />
      </Routes>
    </>
  );
}

export default App;
