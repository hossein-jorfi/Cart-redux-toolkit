import home from "@/public/icons/bottom/home-2.svg";
import catrgory from "@/public/icons/bottom/category.svg";
import bag from "@/public/icons/bottom/bag-2.svg";
import heart from "@/public/icons/bottom/lovely.svg";

import Image from "next/image";
import Link from "next/link";

const MobileBottomBar = () => {
  const items = [
    { id: 3, icon: heart, href: "/likes" },
    { id: 2, icon: bag, href: "/cart" },
    { id: 1, icon: catrgory, href: "#" },
    { id: 0, icon: home, href: "/" },
  ];
  return (
    <div className="fixed bottom-0 left-0 px-6 sm:px-20 py-7 shadow-[0_0_20px_-10px_rgba(1,1,1,1)] rounded-t-lg flex justify-between items-center bg-white w-full">
      {items.map((item) => (
        <Link href={item.href} key={item.id}>
          <Image src={item.icon} alt="icon" />
        </Link>
      ))}
    </div>
  );
};

export default MobileBottomBar;
