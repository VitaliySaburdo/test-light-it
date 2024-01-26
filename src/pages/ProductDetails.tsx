import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import { Section } from "../components/Section/Section";
import { Container } from "../components/Container/Container";

export const ProductDetails = () => {
  const { productId } = useParams();
  let product = null;
  if (productId) {
    product = getProductById(productId);
  }

  return (
    <>
      <Section>
        <Container>
          {product ? (
            <>
              <h2>{product.title}</h2>
              <img src={product.image} alt={product.title} width={50} />
              <p>{product.text}</p>
            </>
          ) : (
            <div>Product not found</div>
          )}
        </Container>
      </Section>
    </>
  );
};
