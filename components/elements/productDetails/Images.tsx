import Image from "next/image";
type Images = {
  image: string;
};
const Images = ({ image }: Images) => {
  return (
    <div className="flex flex-col">
      <Image
        loader={() => image}
        src={image}
        alt="product"
        width={200}
        height={200}
      />
      <div className="flex justify-between mt-4">
        <div className="border-2 rounded-lg cursor-pointer p-2">
          <Image
            loader={() => image}
            src={image}
            alt="product"
            width={40}
            height={40}
          />
        </div>
        <div className="border-2 rounded-lg cursor-pointer p-2">
          <Image
            loader={() => image}
            src={image}
            alt="product"
            width={40}
            height={40}
          />
        </div>
        <div className="border-2 rounded-lg cursor-pointer p-2">
          <Image
            loader={() => image}
            src={image}
            alt="product"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
