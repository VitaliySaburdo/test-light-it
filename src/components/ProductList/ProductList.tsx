import { Link } from "react-router-dom";
import { products } from "../../data/products";
import { ProductItem } from "../ProductItem/ProductItem";
import { List } from "./ProductItem.styled";

export const ProductList = () => {
  return (
    <>
      <List>
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
      </List>
    </>
  );
};
