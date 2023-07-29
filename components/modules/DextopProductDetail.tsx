import React from "react";
import DextopSideBar from "./DextopSideBar";
import DextopSort from "./DextopSort";
import { shopProduct } from "@/types/shopTypes";
import Images from "../elements/productDetails/Images";
import TextsDetails from "../elements/productDetails/TextsDetails";
import AddBox from "../elements/productDetails/AddBox";

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
          <div className="w-fit flex items-center relative">
            <Images image={product.image} />
            <div>
              <TextsDetails {...product} />
              <AddBox product={product} />
            </div>
          </div>
          <div className="space-y-6 mt-20">
            <div className="space-y-3">
              <h3 className="text-xl text-slate-600">
                Reviews of this product
              </h3>
              <p className="text-slate-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quaerat, pariatur beatae? Deserunt eligendi fugit sequi
                necessitatibus, dicta voluptatum nisi doloribus vero natus
                rerum. Tempora vero obcaecati amet odio eos veniam! Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Amet, totam
                necessitatibus quasi perspiciatis eligendi a laudantium ex iste
                neque velit, voluptate vitae dolorum? Voluptatum harum natus
                distinctio laboriosam necessitatibus. Eligendi.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl text-slate-600">Design</h3>
              <p className="text-slate-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quaerat, pariatur beatae? Deserunt eligendi fugit sequi
                necessitatibus, dicta voluptatum nisi doloribus vero natus
                rerum. Tempora vero obcaecati amet odio eos veniam! Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Amet, totam
                necessitatibus quasi perspiciatis eligendi a laudantium ex iste
                neque velit, voluptate vitae dolorum? Voluptatum harum natus
                distinctio laboriosam necessitatibus. Eligendi.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl text-slate-600">Others</h3>
              <p className="text-slate-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quaerat, pariatur beatae? Deserunt eligendi fugit sequi
                necessitatibus, dicta voluptatum nisi doloribus vero natus
                rerum. Tempora vero obcaecati amet odio eos veniam! Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Amet, totam
                necessitatibus quasi perspiciatis eligendi a laudantium ex iste
                neque velit, voluptate vitae dolorum? Voluptatum harum natus
                distinctio laboriosam necessitatibus. Eligendi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DextopProductDetail;
