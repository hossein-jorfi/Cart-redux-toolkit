"use client";
import Link from "next/link";
import React from "react";
import CartCard from "../modules/CartCard";
import { useSelector } from "react-redux";
import { cartSliceType } from "@/redux/features/cart/cartSlice";

const DextopCart = () => {
  const cart: cartSliceType = useSelector((store: any) => store.cart);

  return (
    <div className="hidden sm:grid grid-cols-12 gap-4 px-10 xl:container">
      <div className="col-span-9 flex justify-between">
        <p className="text-slate-800">Cart</p>
        <Link href="/" className="text-orange-500">
          Back To Home
        </Link>
      </div>

      <div className="col-span-9 space-y-4">
        {cart.products.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          cart.products.map(item => <CartCard key={item.id} product={item} />)
        )}
      </div>

      <div className="col-span-3 rounded p-5 bg-white">box</div>
    </div>
  );
};

export default DextopCart;
