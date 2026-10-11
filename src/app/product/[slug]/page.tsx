import type { Product, Category, Market } from "@/types/product";
import { API, banglaNumber, getProducts } from "@/lib/bazar";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const products = await getProducts();
  let product = products.find((p: Product) => String(p.slug || p.id) === slug);
  if (!product) notFound();
  try {
    const res = await fetch(`${API}/products/${product.id}`, { cache: "no-store" });
    if (res.ok) { const data = await res.json(); product = (data.data || data) as Product; }
  } catch {}
  const markets = product.markets || [];
  return <main className="max-w-6xl mx-auto px-4 py-10 space-y-8">
    <div className="card bg-base-100 border border-gray-200"><div className="card-body"><div className="text-6xl">{product.categoryIcon || "🛒"}</div><h1 className="text-3xl font-bold">{product.nameBn}</h1><p>{product.description || "আজকের বাজারে এই পণ্যের সর্বশেষ দাম দেখুন।"}</p><p className="badge badge-outline">{product.categoryNameBn || product.category}</p><p>প্রতি {product.unit}</p><p className="text-2xl font-bold text-green-700">আজকের দাম: {banglaNumber(product.today)} টাকা</p></div></div>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">{[["সর্বনিম্ন দাম", markets.length ? Math.min(...markets.map((m) => m.min)) : null], ["সর্বোচ্চ দাম", markets.length ? Math.max(...markets.map((m) => m.max)) : null], ["গড় দাম", markets.length ? Math.round(markets.reduce((sum, m) => sum + (m.min + m.max) / 2, 0) / markets.length) : null]].map(([label, value]) => <div key={String(label)} className="card bg-base-200"><div className="card-body"><p>{label}</p><h2 className="text-2xl font-bold">{value == null ? "তথ্য নেই" : `${banglaNumber(value)} টাকা`}</h2></div></div>)}</div>
    <section><h2 className="text-2xl font-bold mb-4">বাজারভিত্তিক আজকের দাম</h2>{Array.isArray(markets) && markets.length > 0 ? <div className="overflow-x-auto"><table className="table table-zebra"><thead><tr><th>বাজার</th><th>দাম</th></tr></thead><tbody>{markets.map((m: Market, i: number) => <tr key={i}><td>{m.market}</td><td>{`${banglaNumber(m.min)} - ${banglaNumber(m.max)}`} টাকা</td></tr>)}</tbody></table></div> : <p className="text-gray-500">বাজারভিত্তিক তথ্য পাওয়া যায়নি।</p>}</section>
  </main>;
}
