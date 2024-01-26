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
        <img src={image} alt={title} width={50} />
      </div>
    </>
  );
};
