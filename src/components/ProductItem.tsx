export const ProductItem = ({
  title,
  image,
  text,
}: {
  title: string;
  image: string;
  text: string;
}) => {
  return (
    <>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{text}</p>
    </>
  );
};
