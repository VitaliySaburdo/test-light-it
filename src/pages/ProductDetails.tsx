import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const { productId } = useParams();
  console.log(productId);
  return <></>;
};
