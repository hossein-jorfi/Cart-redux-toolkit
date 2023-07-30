import Colors from "@/components/elements/Colors";
import MobileIndent from "@/components/elements/productDetails/MobileIndent";
import { shopProduct } from "@/types/shopTypes";
import Image from "next/image";
import React from "react";

// Icons
import shopSVG from "@/public/icons/AddBox/shop.svg";
import shieldSVG from "@/public/icons/AddBox/Vector.svg";
import truckSVG from "@/public/icons/AddBox/truck-time.svg";
import AddBottom from "@/components/elements/productDetails/AddBottom";

type MobileProductDetailProps = {
  product: shopProduct;
};

const MobileProductDetail = ({ product }: MobileProductDetailProps) => {
  return (
    <div className="sm:hidden container">
      <AddBottom product={product} />
      <MobileIndent />
      <div className="flex justify-center items-center mt-6">
        <Image
          src={product.image}
          alt="product image"
          width={200}
          height={200}
        />
      </div>
      <div className="text-center mt-10">
        <p className="text-slate-600 font-semibold text-lg ">{product.title}</p>
        <p className="text-slate-500 font-light mt-2">Lorem, ipsum dolor sit</p>
      </div>
      <div className="flex justify-center items-center space-x-3 mt-7">
        <p className="text-lg">Color </p>
        <Colors />
      </div>
      <div className="flex flex-col justify-center items-center text-center mt-5 space-y-1">
        <div className="flex justify-between items-center space-x-4">
          <div className="flex space-x-1">
            <Image src={shopSVG} alt="icon" />
            <p>Amazon</p>
          </div>
          <div className="flex space-x-1">
            <Image src={truckSVG} alt="icon" />
            <p>On time</p>
          </div>
        </div>
        <div className="flex space-x-1">
          <Image src={shieldSVG} alt="icon" />
          <p>Warranty</p>
        </div>
      </div>
      <div className="space-y-6 mt-20">
        <div className="space-y-3 bg-white p-7 rounded-lg">
          <h3 className="text-xl text-slate-600">Reviews of this product</h3>
          <p className="text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
            pariatur beatae? Deserunt eligendi fugit sequi necessitatibus, dicta
            voluptatum nisi doloribus vero natus rerum. Tempora vero obcaecati
            amet odio eos veniam! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Amet, totam necessitatibus quasi perspiciatis
            eligendi a laudantium ex iste neque velit, voluptate vitae dolorum?
            Voluptatum harum natus distinctio laboriosam necessitatibus.
            Eligendi.
          </p>
        </div>
        <div className="space-y-3 bg-white p-7 rounded-lg">
          <h3 className="text-xl text-slate-600">Design</h3>
          <p className="text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
            pariatur beatae? Deserunt eligendi fugit sequi necessitatibus, dicta
            voluptatum nisi doloribus vero natus rerum. Tempora vero obcaecati
            amet odio eos veniam! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Amet, totam necessitatibus quasi perspiciatis
            eligendi a laudantium ex iste neque velit, voluptate vitae dolorum?
            Voluptatum harum natus distinctio laboriosam necessitatibus.
            Eligendi.
          </p>
        </div>
        <div className="space-y-3 bg-white p-7 rounded-lg">
          <h3 className="text-xl text-slate-600">Others</h3>
          <p className="text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
            pariatur beatae? Deserunt eligendi fugit sequi necessitatibus, dicta
            voluptatum nisi doloribus vero natus rerum. Tempora vero obcaecati
            amet odio eos veniam! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Amet, totam necessitatibus quasi perspiciatis
            eligendi a laudantium ex iste neque velit, voluptate vitae dolorum?
            Voluptatum harum natus distinctio laboriosam necessitatibus.
            Eligendi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileProductDetail;
