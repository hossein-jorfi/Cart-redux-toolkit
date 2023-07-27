import svg from "@/public/icons/color-swatch.svg";
import Image from "next/image";
type TextsDetailsProps = {
  title: string;
  category: string;
  rating: { rate: number };
};
const TextsDetails = ({ title, category, rating }: TextsDetailsProps) => {
  return (
    <div className="flex flex-col justify-between pl-5">
      <div className="flex">
        <Image src={svg} className="text-orange-600" alt="icon" />
        <p className="ml-1 text-sm text-orange-600 font-extralight">{category}</p>
      </div>
      <p className="text-slate-800">{title}</p>
      <div>
            <p>{rating.rate}</p>
      </div>
    </div>
  );
};

export default TextsDetails;
