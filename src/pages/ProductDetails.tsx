import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";

export const ProductDetails = () => {
  const { productId } = useParams();
  let product = null;
  if (productId) {
    product = getProductById(productId);
  }

  return (
    <>
      <div>
        {product ? (
          <>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} width={50} />
            <p>{product.text}</p>
          </>
        ) : (
          <div>Product not found</div>
        )}
      </div>
    </>
  );
};
