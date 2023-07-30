"use client";
import { useDispatch, useSelector } from "react-redux";
type AddBox = {
  product: shopProduct;
};

// Icons
import shopSVG from "@/public/icons/AddBox/shop.svg";
import shieldSVG from "@/public/icons/AddBox/Vector.svg";
import truckSVG from "@/public/icons/AddBox/truck-time.svg";
import trashPNG from "@/public/icons/AddBox/trash.png";

// Others
import Image from "next/image";
import { shopProduct } from "@/types/shopTypes";
import { addProduct, removeProduct } from "@/redux/features/cart/cartSlice";

const AddBox = ({ product }: AddBox) => {
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
    <div className="bg-stone-100 rounded p-3 space-y-8 ml-5 mt-4">
      <div className="flex flex-col justify-between items-start text-slate-600 space-y-2">
        <div className="flex space-x-2 font-medium">
          <Image src={shopSVG} alt="icon" />
          <p>Amazon</p>
        </div>
        <div className="flex space-x-2 font-medium">
          <Image src={shieldSVG} alt="icon" />
          <p>Warranty</p>
        </div>
        <div className="flex space-x-2 font-medium">
          <Image src={truckSVG} alt="icon" />
          <p>On time</p>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-orange-600">$ {product.price}</p>
        {!productInCart ? (
          <button
            onClick={clickHandler}
            className="py-3 w-full rounded bg-orange-500 text-white"
          >
            Add To Cart
          </button>
        ) : (
          <button className="py-3 px-3 w-fit rounded bg-orange-500 text-white flex justify-center items-center space-x-10">
            {productInCart.count === 1 ? (
              <span onClick={removeHandler} className="w-6 text-white">
                <Image src={trashPNG} alt="trash" className="text-white" />
              </span>
            ) : (
              <span className="text-2xl" onClick={removeHandler}>
                -
              </span>
            )}
            <span>{productInCart.count}</span>
            <span className="text-2xl" onClick={clickHandler}>
              +
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default AddBox;
