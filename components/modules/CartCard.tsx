import { shopProduct } from "@/types/shopTypes";
import Image from "next/image";
import React from "react";
import star from "@/public/icons/icons8-star-48.png";
import { shorter } from "@/utils/helper";
import AddBottom from "../elements/productDetails/AddBottom";
import AddBox from "../elements/productDetails/AddBox";

type CartCardProps = {
  product: shopProduct;
};

const CartCard = ({ product }: CartCardProps) => {
  return (
    <div className="flex space-x-10 bg-white p-3 rounded">
      <div className="space-x-3 border p-1 rounded w-32 h-32 flex justify-center items-center">
        <Image
          src={product.image}
          alt="product image"
          width={128}
          height={0}
          style={{ maxHeight: "100%" }}
        />
      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col justify-between">
          <p className="text-slate-700">{shorter(product.title)}</p>
          <p className="text-orange-500">$ {product.price}</p>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex items-center space-x-1">
            <Image src={star} alt="start icon" width={14} />
            <p className="text-sm text-slate-600">{product.rating.rate}</p>
          </div>
          <div>
            <AddBox inCart={true} product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
