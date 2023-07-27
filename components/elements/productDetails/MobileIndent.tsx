import React from "react";
import arrawSVG from "@/public/icons/Arrow---Left-2.svg";
import Image from "next/image";

const MobileIndent = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="text-sm text-orange-600">product</div>
      <div className="rotate-180">
        <Image src={arrawSVG} alt="arrow svg" />
      </div>
      <div className="text-sm text-orange-600">brand</div>
      <div className="rotate-180">
        <Image src={arrawSVG} alt="arrow svg" />
      </div>
      <div className="text-sm">model</div>
    </div>
  );
};

export default MobileIndent;
