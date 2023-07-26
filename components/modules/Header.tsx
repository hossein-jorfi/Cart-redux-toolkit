"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";

// Icons
import serchIcon from "@/public/icons/search-normal.svg";
import Image from "next/image";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const menuItems = [
    { href: "#", title: "Home" },
    { href: "#", title: "About" },
    { href: "#", title: "Weblog" },
  ];
  return (
    <div className="bg-gray-100 sm:bg-stone-50 py-10 sm:shadow-md">
      {/* Dextop */}
      <div className="xl:container sm:px-8 hidden sm:flex justify-start items-center space-x-10">
        <div className="text-xl md:text-3xl text-orange-600 w-fit font-bold">
          COMPANY
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
        <div className="bg-gray-200 w-2/3 flex p-3">
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
      </div>
      {/* Mobile */}
      <div className="sm:hidden container flex justify-between items-center">
        <div className="text-xl text-orange-600 font-bold">LOGO</div>
        <div className="text-slate-800 text-lg font-bold">Products</div>
        <div className="bg-white p-1 rounded-md cursor-pointer">
          <Image src={serchIcon} alt="serchIcon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
