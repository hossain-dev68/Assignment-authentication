"use client";
import type { Product, Category, Market } from "@/types/product";

import Link from "next/link";
import { usePathname } from "next/navigation";
const NavLinks = ({ categories }: { categories: Category[] }) => {
  const pathname = usePathname();
  return <div className="flex gap-5 items-center py-3 whitespace-nowrap text-sm"><Link className={pathname === "/" ? "text-green-700 font-bold" : ""} href="/">হোম</Link>{categories.map((n: Category) => <Link key={n.slug} href={`/category/${n.slug}`} className={pathname === `/category/${n.slug}` ? "text-green-700 font-bold" : ""}>{n.icon} {n.nameBn}</Link>)}</div>;
};
export default NavLinks;
