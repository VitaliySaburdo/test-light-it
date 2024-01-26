import { Container } from "../components/Container/Container";
import { ProductList } from "../components/ProductList/ProductList";
import { Section } from "../components/Section/Section";

export const Home = () => {
  return (
    <>
      <Section>
        <Container>
          <ProductList />
        </Container>
      </Section>
    </>
  );
};
