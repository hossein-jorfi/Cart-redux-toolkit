"use client";
import { cartSliceType } from "@/redux/features/cart/cartSlice";
import { useSelector } from "react-redux";
import CartCard from "../modules/CartCard";
import MobileCartCard from "../modules/mobile/MobileCartCard";
import MobileBottomBar from "../modules/mobile/MobileBottomBar";

const MobileCart = () => {
  const cart: cartSliceType = useSelector((store: any) => store.cart);
  return (
    <div className="sm:hidden">
      <div className="sm:hidden px-4 space-y-4">
        {cart.products.length > 0 ? (
          cart.products.map((item) => (
            <MobileCartCard key={item.id} product={item} />
          ))
        ) : (
          <p>Cart is Empty</p>
        )}
      </div>

      <div className="px-4 mt-5">
        <div className="rounded-lg p-3 bg-white space-y-10 h-fit">
          <div className="flex justify-between">
            <p className="text-slate-700">Total Price: </p>
            <p className="text-orange-600">${cart.totalPrice.toFixed(1)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-slate-700">Discount:</p>
            <p className="text-orange-600">$0</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="bg-orange-500 text-center text-white p-3 rounded-lg">Continue</p>
        </div>
        <MobileBottomBar />
      </div>
    </div>
  );
};

export default MobileCart;
