import { shopProduct } from "@/types/shopTypes";
import Image from "next/image";
import React from "react";
import star from "@/public/icons/icons8-star-48.png";
import { shorter } from "@/utils/helper";
import trashPNG from "@/public/icons/AddBox/trash.png";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "@/redux/features/cart/cartSlice";

type CartCardProps = {
  product: shopProduct;
};

const MobileCartCard = ({ product }: CartCardProps) => {
  const cart = useSelector((store: any) => store.cart);
  const dispath = useDispatch();
  const productInCart: shopProduct = cart.products.find(
    (item: any) => item.id === product.id
  );

  const clickHandler = () => {
    dispath(addProduct(product));
  };

  const removeHandler = () => {
    dispath(removeProduct(product));
  };

  return (
    <div className="flex space-x-10 bg-white p-3 rounded-lg">
      <div className="space-x-3 border p-1 rounded w-28 h-28 flex justify-center items-center">
        <Image
          src={product.image}
          alt="product image"
          width={112}
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
          <div className="full">
            <button className="py-1 px-2 w-full rounded-lg bg-orange-500 text-white flex justify-center items-center space-x-10">
              {productInCart.count === 1 ? (
                <span onClick={removeHandler} className="w-4 text-white">
                  <Image src={trashPNG} alt="trash" className="text-white" />
                </span>
              ) : (
                <span className="" onClick={removeHandler}>
                  -
                </span>
              )}
              <span>{productInCart.count}</span>
              <span className="" onClick={clickHandler}>
                +
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCartCard;
