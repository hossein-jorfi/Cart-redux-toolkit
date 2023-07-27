import React from "react";
import DextopSideBar from "./DextopSideBar";
import DextopSort from "./DextopSort";
import { shopProduct } from "@/types/shopTypes";
import Images from "../elements/productDetails/Images";
import TextsDetails from "../elements/productDetails/TextsDetails";

type DextopProductDetail = {
  product: shopProduct;
};

const DextopProductDetail = ({ product }: DextopProductDetail) => {
  return (
    <div className="hidden sm:block xl:container px-4 sm:px-8">
      <DextopSort detail={true} {...product} />
      <div className="grid grid-cols-12 gap-5 mt-5">
        <div className="col-span-3 xl:col-span-2 hidden lg:block">
          <DextopSideBar />
        </div>

        <div className="col-span-12 overflow-hidden lg:col-span-9 xl:col-span-10 rounded-lg bg-white p-7">
          <div className="w-fit flex items-center">
            <Images image={product.image} />
            <TextsDetails {...product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DextopProductDetail;
