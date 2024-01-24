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
      <div className="mx-20">
        <h2>{title}</h2>
        <img src={image} alt={title} width={50} />
        <p>{text}</p>
      </div>
    </>
  );
};
