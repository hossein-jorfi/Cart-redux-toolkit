import { cache } from "react";

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  const data = (await res.json()) as any[];
  return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <div className="p-10 text-lg space-y-1">
      {data.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
}
