import svg from "@/public/icons/color-swatch.svg";
import star from "@/public/icons/icons8-star-48.png";
import Image from "next/image";
import Colors from "../Colors";
type TextsDetailsProps = {
  title: string;
  category: string;
  rating: { rate: number };
};
const TextsDetails = ({ title, category, rating }: TextsDetailsProps) => {
  return (
    <div className="flex flex-col justify-between pl-5 space-y-2">
      <div className="flex">
        <Image src={svg} className="text-orange-600" alt="icon" />
        <p className="ml-1 text-sm text-orange-600 font-extralight">
          {category}
        </p>
      </div>
      <p className="text-slate-600 text-xl">{title}</p>
      <div className="flex space-x-1">
        <Image src={star} alt="start icon" width={20} height={20} />
        <p className="text-slate-600">{rating.rate}</p>
      </div>

      <div className="w-full h-[1px] bg-slate-200 rounded-lg"></div>

      <div>
        <div className="flex space-x-3 items-center">
          <p className="text-slate-600">Color :</p>
          <Colors />
        </div>
        <p className="mt-3 text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquam
          temporibus quas cumque ducimus, voluptate hic ab praesentium nobis
          incidunt tempore autem, dolor impedit neque numquam amet ratione?
          Explicabo, omnis.
        </p>
      </div>
    </div>
  );
};

export default TextsDetails;
