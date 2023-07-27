import ProductDetail from "@/components/templates/ProductDetail";
import React from "react";

type productIdProps = {
  params: {
    productId: string;
  };
};

const productId = ({ params }: productIdProps) => {
  return (
    <div>
      <ProductDetail productId={+params.productId} />
    </div>
  );
};

export default productId;
