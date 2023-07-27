"use client";
import React, { useState } from "react";
import sortSVG from "@/public/icons/Sort.svg";
import Image from "next/image";

type DextopSortProps = {
  detail: boolean;
  category?: string;
  title?: string;
};

const DextopSort = ({ detail, category, title }: DextopSortProps) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const sorItems = [
    { id: 0, title: "Popular" },
    { id: 1, title: "Most visited" },
    { id: 2, title: "Most expensive" },
    { id: 3, title: "Cheapest" },
  ];
  if (detail) {
    return (
      <div className="bg-white mt-4 p-2 rounded-md flex items-center space-x-4">
        {category} - {title?.split(" ")[0]} {title?.split(" ")[1]}
      </div>
    );
  }
  return (
    <div className="bg-white mt-4 p-2 rounded-md flex items-center space-x-4">
      <div>
        <Image src={sortSVG} alt="sortSVG" />
      </div>
      {sorItems.map((item) => (
        <div
          key={item.id}
          onClick={() => setSelectedItem(item.id)}
          className={`${
            selectedItem === item.id ? "opacity-95" : null
          } opacity-50 cursor-pointer`}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default DextopSort;
