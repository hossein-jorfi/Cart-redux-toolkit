import sort from "@/public/icons/mobile-sort.svg";
import Image from "next/image";

const MobileFavorite = () => {
  return (
    <div className="bg-white flex justify-start items-center space-x-3 w-full h-full px-2 py-4 rounded-lg cursor-pointer">
      <div>
        <Image src={sort} alt="icon" />
      </div>
      <div>Sort By</div>
    </div>
  );
};

export default MobileFavorite;
