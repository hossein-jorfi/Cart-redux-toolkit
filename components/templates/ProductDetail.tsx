"use client";
import { fetchProdcuts } from "@/redux/features/shop/shopSlice";
import { shopProduct } from "@/types/shopTypes";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DextopProductDetail from "../modules/DextopProductDetail";
import MobileProductDetail from "../modules/mobile/MobileProductDetail";

type ProductDetailProps = {
  productId: number;
};

type shopType = {
  loading: boolean;
  products: shopProduct[];
  error: string;
};

const ProductDetail = ({ productId }: ProductDetailProps) => {
  const shop: shopType = useSelector((state: any) => state.shop);
  const product: shopProduct | undefined = shop.products.find(
    (item) => item.id === productId
  );
  console.log(product?.image);
  return (
    <>
      <DextopProductDetail product={product as shopProduct} />
      <MobileProductDetail product={product as shopProduct} />
    </>
  );
};

export default ProductDetail;

{
  /* <Image
        loader={() => product?.image as any}
        src={product?.image as any}
        alt="product"
        width={200}
        height={200}
      /> */
}
