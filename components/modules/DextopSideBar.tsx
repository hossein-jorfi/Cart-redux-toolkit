"use client";
import { useState } from "react";

const DextopSideBar = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const categoriesItem = [
    { id: 0, title: "men's clothing" },
    { id: 1, title: "women's clothing" },
    { id: 2, title: "jewelery" },
    { id: 3, title: "electronics" },
  ];
  return (
    <div className="bg-stone-50 py-5 px-3 rounded-lg h-96">
      <p className="text-orange-600 text-xl">Category</p>
      <div className="pl-2 pt-2 text-lg font-light text-slate-900 space-y-3">
        {categoriesItem.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item.id)}
            className={`opacity-50 ${
              selectedItem === item.id && "opacity-95"
            } cursor-pointer`}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DextopSideBar;
