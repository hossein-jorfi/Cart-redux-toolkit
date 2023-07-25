import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export async function generateStaticParams() {
  return [{ userId: "1" }, { userId: "2" }];
}

const page = ({ params }: Params) => {
  console.log(params);
  return <div className="p-10">User ID - {params.userId}</div>;
};

export default page;
