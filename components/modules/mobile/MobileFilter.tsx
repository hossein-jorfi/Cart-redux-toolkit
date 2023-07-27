import filterSVG from "@/public/icons/filter.svg";
import Image from "next/image";

const MobileFilter = () => {
  return (
    <div className="bg-white flex justify-start items-center space-x-3 w-full h-full px-2 py-4 rounded-lg cursor-pointer">
      <div>
        <Image src={filterSVG} alt="icon" />
      </div>
      <p>Filter</p>
    </div>
  );
};

export default MobileFilter;
