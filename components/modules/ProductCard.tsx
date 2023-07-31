import { shorter } from "@/utils/helper";
import Image from "next/image";
import Colors from "../elements/Colors";
import Link from "next/link";
import Like from "../elements/Like";

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

const ProductCard = ({
  title,
  image,
  category,
  price,
  id,
}: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg p-3">
      <div className="mx-auto h-2/3 rounded-lg overflow-hidden relative">
        <Like />
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
      <div className="flex flex-col justify-between h-1/3">
        <div>
          <div className="flex justify-between mt-3 items-center">
            <p className="hidden sm:block text-sm text-slate-500">{category}</p>
            <Colors />
          </div>
          <p className="text-slate-800 mt-3">{shorter(title)}</p>
          <p className="text-orange-600">${price}</p>
        </div>
        <Link
          href={`/product/${id}`}
          className="border text-md border-orange-600 text-orange-600 p-2 rounded-lg text-center hover:bg-orange-600 hover:text-white cursor-pointer transition-all"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
