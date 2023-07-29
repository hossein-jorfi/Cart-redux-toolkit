"use client";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import Image from "next/image";

// Icons
import serchIcon from "@/public/icons/search-normal.svg";
import arrowSVG from "@/public/icons/arrow-up.svg";
import cartPNG from "@/public/icons/cart-24.png";

const Header = () => {
  const params = useParams();
  const router = useRouter();
  const isInDetail = params.productId;
  const [isClicked, setIsClicked] = useState(false);
  const menuItems = [
    { href: "#", title: "Home" },
    { href: "#", title: "About" },
    { href: "#", title: "Weblog" },
  ];
  return (
    <div className="bg-gray-100 sm:bg-white py-10 sm:shadow-md sm:fixed top-0 w-full z-10">
      {/* Dextop */}
      <div className="xl:container sm:px-8 hidden sm:flex justify-start items-center space-x-10">
        <div className="text-xl md:text-3xl text-orange-600 w-fit font-bold">
          <Link href="/">COMPANY</Link>
        </div>
        <div className="justify-between w-full space-x-10 text-md md:text-lg">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="hover:text-orange-600 cursor-pointer"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="bg-gray-200 w-2/3 flex p-3 rounded-md">
          <Image
            src={serchIcon}
            alt="serchIcon"
            className={`${
              isClicked && "rotate-[360deg]"
            } transition-all ease-in-out duration-500`}
          />
          <input
            onFocus={() => setIsClicked(true)}
            onBlur={() => setIsClicked(false)}
            placeholder="Search..."
            className="bg-inherit outline-none pl-6 text-slate-800 placeholder:text-slate-500 w-full"
          />
        </div>
        <Link href="/cart" className="text-xl relative">
          <Image src={cartPNG} alt="cart icon" />
          <div className="absolute text-white -top-1 cursor-pointer -right-1 text-sm px-1 py-0 bg-orange-400 rounded-full">
            10
          </div>
        </Link>
      </div>
      {/* Mobile */}
      <div
        className={`sm:hidden container flex justify-between items-center bg-opacity-30 backdrop-blur w-full ${
          isInDetail && "flex-row-reverse"
        }`}
      >
        {isInDetail ? (
          <div
            onClick={() => router.back()}
            className="bg-white shadow-md p-2.5 rounded-md cursor-pointer"
          >
            <Image className="font-bold" src={arrowSVG} alt="serchIcon" />
          </div>
        ) : (
          <div className="text-xl text-orange-600 font-bold">
            <Link href="/">LOGO</Link>
          </div>
        )}
        <div className="text-slate-800 text-lg font-bold">
          {isInDetail ? "Product" : "Products"}
        </div>
        <div className="shadow-lg bg-white p-1 rounded-md cursor-pointer">
          <Image src={serchIcon} alt="serchIcon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
