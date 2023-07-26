"use client";
import { fetchProdcuts } from "@/redux/features/shop/shopSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { shopProduct } from "@/types/shopTypes";

type shopType = {
  loading: boolean;
  products: shopProduct[];
  error: string;
};

const Home = () => {
//   const shop: shopType = useSelector((state: any) => state.shop);
//   const dispath = useDispatch();
//   useEffect(() => {
//     dispath(fetchProdcuts() as any);
//   }, []);
  return (
    <div className="xl:container px-4 sm:px-8">
      Home
      {/* {shop.loading ? (
        <p>LOADING...</p>
      ) : (
        shop.products.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
          </div>
        ))
      )}
      {shop.error && <p>*ERROR*</p>} */}
    </div>
  );
};

export default Home;
