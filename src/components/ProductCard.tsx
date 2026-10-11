import type { Product, Category, Market } from "@/types/product";
import Link from "next/link";
import { banglaNumber, changeValue } from "@/lib/bazar";

const ProductCard = ({ product }: { product: Product }) => {
  const change = changeValue(product);
  return (
    <Link href={`/product/${product.slug || product.id}`} className="card bg-base-100 border border-gray-200 shadow-sm hover:shadow-md transition">
      <div className="card-body gap-3">
        <div className="text-5xl">{product.image || product.categoryIcon || "🛒"}</div>
        <h3 className="text-lg font-bold">{product.nameBn}</h3>
        <p className="text-sm text-gray-500">প্রতি {product.unit}</p>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div><p className="text-xs text-gray-500">আজকের দাম</p><p className="text-xl font-bold text-green-700">{banglaNumber(product.today)} টাকা</p></div>
          <span className={`badge ${change > 0 ? "badge-success" : change < 0 ? "badge-error" : "badge-ghost"}`}>
            {change > 0 ? "▲" : change < 0 ? "▼" : "—"} {Math.abs(change).toLocaleString("bn-BD")}%
          </span>
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;
