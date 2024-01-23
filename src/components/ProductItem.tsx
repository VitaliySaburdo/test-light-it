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
      <div>
        <h2>{title}</h2>
        <img src={image} alt={title} width={50} />
        <p>{text}</p>
      </div>
    </>
  );
};
