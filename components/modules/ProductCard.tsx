import { shorter } from "@/utils/helper";
import Image from "next/image";

type ProductCardProps = {
  title: string;
  id: number;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const ProductCard = ({ title, image }: ProductCardProps) => {
  return (
    <div className="bg-stone-50 rounded-lg p-3">
      <div className="mx-auto h-2/3 rounded-lg overflow-hidden">
        <Image
          unoptimized
          loader={() => image}
          src={image}
          alt="product image"
          className="w-full"
          width={0}
          height={0}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <p>{shorter(title)}</p>
    </div>
  );
};

export default ProductCard;
