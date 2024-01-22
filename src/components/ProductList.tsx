import products from "../data/products.json";
import { ProductItem } from "./ProductItem";

export const ProductList = () => {
  return (
    <>
      <ul>
        {products.map((product) => {
          const { id, title, image, text } = product;
          return (
            <li key={id}>
              <ProductItem title={title} image={image} text={text} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
