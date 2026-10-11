import type { Product, Category, Market } from "@/types/product";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import { getProducts, banglaNumber, changeValue } from "@/lib/bazar";
const Marquee = async () => {
  const products = await getProducts();
  return (
    <div className="bg-green-50 overflow-hidden">
      <div className="max-w-6xl mx-auto py-2">
        <MarqueeText direction="right" duration={30}>{products.slice(0, 20).map((p: Product) => <span key={p.id} className="mx-5">{p.image || p.categoryIcon || "🛒"} {p.nameBn} : {banglaNumber(p.today)} টাকা/{p.unit} {changeValue(p) > 0 ? "▲" : changeValue(p) < 0 ? "▼" : "—"} {Math.abs(changeValue(p))}%</span>)}</MarqueeText>
      </div>
    </div>
  );
};
export default Marquee;
