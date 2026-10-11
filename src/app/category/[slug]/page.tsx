import type { Product, Category, Market } from "@/types/product";
import { getCategories, getProducts } from "@/lib/bazar";
import CategoryProducts from "@/components/CategoryProducts";
import { notFound } from "next/navigation";

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const categories = await getCategories();
  const category = categories.find((c: Category) => c.slug === slug);
  if (!category) notFound();
  const products = await getProducts();
  const filtered = products.filter((p: Product) => p.category === slug);
  if (filtered.length === 0) notFound();
  return <main className="max-w-6xl mx-auto px-4 py-10"><h1 className="text-3xl font-bold mb-6">{category.icon} {category.nameBn}</h1><CategoryProducts products={filtered} /></main>;
}
