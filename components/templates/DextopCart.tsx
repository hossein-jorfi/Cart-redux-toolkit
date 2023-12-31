"use client";
import Link from "next/link";
import React from "react";
import CartCard from "../modules/CartCard";
import { useSelector, useDispatch } from "react-redux";
import { cartSliceType } from "@/redux/features/cart/cartSlice";
import { clearCart } from "@/redux/features/cart/cartSlice";

const DextopCart = () => {
  const cart: cartSliceType = useSelector((store: any) => store.cart);
  const dispath = useDispatch()

  const clearHandler = () => {
    dispath(clearCart())
  }
  return (
    <div className="hidden sm:grid grid-cols-12 gap-4 px-10 xl:container">
      {cart.products.length > 0 && (
        <div className="col-span-9 flex justify-between">
          <p className="text-slate-800">Cart</p>
          <Link href="/" className="text-orange-500">
            Back To Home
          </Link>
        </div>
      )}

      <div className="col-span-9 space-y-4">
        {cart.products.length === 0 ? (
          <>
            <p className="text-2xl font-semibold text-slate-600">
              Cart is empty
            </p>
            <Link href={"/"} className="text-2xl font-semibold text-orange-600 ">Shop</Link>
          </>
        ) : (
          cart.products.map((item) => <CartCard key={item.id} product={item} />)
        )}
      </div>

      {cart.products.length > 0 && (
        <div className="col-span-3 space-y-4">
          <div className="rounded p-5 bg-white space-y-10 h-fit">
            <div className="flex justify-between">
              <p className="text-slate-700">Total Price: </p>
              <p className="text-orange-600">${(cart.totalPrice).toFixed(1)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-slate-700">Discount:</p>
              <p className="text-orange-600">$0</p>
            </div>
          </div>
          <div className="space-y-2">
            <button onClick={clearHandler} className="w-full p-3 rounded bg-orange-500 text-white">
              Continue
            </button>
            <button onClick={clearHandler} className="w-full p-3 rounded border border-orange-500 text-orange-600">
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DextopCart;
