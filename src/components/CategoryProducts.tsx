
"use client";
import type { Product, Category, Market } from "@/types/product";
import { useState } from "react";
import ProductCard from "./ProductCard";
import { numberValue } from "@/lib/bazar";

const CategoryProducts = ({ products }: { products: Product[] }) => {
  const [sort, setSort] = useState("default");
  const sorted = [...products];
  if (sort === "low") sorted.sort((a, b) => numberValue(a.today ?? a.price) - numberValue(b.today ?? b.price));
  if (sort === "high") sorted.sort((a, b) => numberValue(b.today ?? b.price) - numberValue(a.today ?? a.price));
  return <><div className="flex justify-end mb-5"><select className="select select-bordered" value={sort} onChange={(e) => setSort(e.target.value)}><option value="default">সাজান: ডিফল্ট</option><option value="low">দাম: কম থেকে বেশি</option><option value="high">দাম: বেশি থেকে কম</option></select></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">{sorted.map((p) => <ProductCard key={p.id} product={p} />)}</div></>;
};
export default CategoryProducts;
