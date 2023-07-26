"use client"
import { fetchProdcuts } from "@/redux/features/shop/shopSlice";
import { shopProduct } from "@/types/shopTypes";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";

type shopType = {
  loading: boolean;
  products: shopProduct[];
  error: string;
};
const HomeProducts = () => {
  const shop: shopType = useSelector((state: any) => state.shop);
  const dispath = useDispatch();
  useEffect(() => {
    dispath(fetchProdcuts() as any);
  }, []);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {shop.loading ? (
        <p>loading...</p>
      ) : (
        shop.products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))
      )}
      {shop.error && <p>*ERROR*</p>}
    </div>
  );
};

export default HomeProducts;
