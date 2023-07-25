import Link from "next/link";

const page = () => {
  return (
    <div className="p-10">
      <Link href="/users/1">Go!</Link>
    </div>
  );
};

export default page;
