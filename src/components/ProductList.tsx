import { Link } from "react-router-dom";
import { products } from "../data/products";
import { ProductItem } from "./ProductItem";

export const ProductList = () => {
  return (
    <>
      <ul style={{ display: "grid", gridTemplateColumns: "5fr" }}>
        {products.map((product) => {
          const { id, title, image } = product;
          return (
            <li key={id}>
              <Link to={`${id}`}>
                <ProductItem title={title} image={image} />
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
