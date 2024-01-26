import { Product } from "../../types";

export const ProductDetails = ({ product }: { product: Product }) => {
  return (
    <>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width={50} />
      <p>{product.text}</p>
    </>
  );
};
