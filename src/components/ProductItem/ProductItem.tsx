import { Img } from "./ProductItem.styled";

export const ProductItem = ({
  title,
  image,
}: {
  title: string;
  image: string;
}) => {
  return (
    <>
      <div className="mx-20">
        <Img src={image} alt={title} width={50} />
      </div>
    </>
  );
};
