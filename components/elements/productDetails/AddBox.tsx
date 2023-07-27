import React from "react";

type AddBox = {
  price: number;
};

// Icons
import shopSVG from "@/public/icons/AddBox/shop.svg";
import shieldSVG from "@/public/icons/AddBox/Vector.svg";
import truckSVG from "@/public/icons/AddBox/truck-time.svg";
import Image from "next/image";
import { shopProduct } from "@/types/shopTypes";

const AddBox = ({ price }: AddBox) => {
  return (
    <div className="bg-stone-100 rounded p-3 space-y-8 ml-5 mt-4">
      <div className="flex flex-col justify-between items-start text-slate-600 space-y-2">
        <div className="flex space-x-2">
          <Image src={shopSVG} alt="icon" />
          <p>Amazon</p>
        </div>
        <div className="flex space-x-2">
          <Image src={shieldSVG} alt="icon" />
          <p>Warranty</p>
        </div>
        <div className="flex space-x-2">
          <Image src={truckSVG} alt="icon" />
          <p>On time</p>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-orange-600">$ {price}</p>
        <button className="py-3 w-full rounded bg-orange-500 text-white">Add To Cart</button>
      </div>
    </div>
  );
};

export default AddBox;
