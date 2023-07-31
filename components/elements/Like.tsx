"use client";
import Image from "next/image";
import { useState } from "react";

import heart2 from "@/public/icons/heart/icons8-heart-50 (1).png";
import heart from "@/public/icons/heart/icons8-heart-50.png";

const Like = () => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="absolute top-0 right-0 cursor-pointer bg-gray-300 bg-opacity-50 backdrop-blur-sm p-2 rounded-full">
      {isLiked ? (
        <Image
          src={heart2}
          alt=""
          width={20}
          onClick={() => setIsLiked((prev) => !prev)}
        />
      ) : (
        <Image
          src={heart}
          alt=""
          width={20}
          onClick={() => setIsLiked((prev) => !prev)}
        />
      )}
    </div>
  );
};

export default Like;
