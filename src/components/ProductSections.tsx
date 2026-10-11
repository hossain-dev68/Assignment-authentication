import type { Product, Category, Market } from "@/types/product";
import ProductCard from "./ProductCard";
import { changeValue } from "@/lib/bazar";

const ProductSections = ({ products }: { products: Product[] }) => {
  const risers = products.filter((p) => changeValue(p) > 0).sort((a, b) => changeValue(b) - changeValue(a)).slice(0, 6);
  const fallers = products.filter((p) => changeValue(p) < 0).sort((a, b) => changeValue(a) - changeValue(b)).slice(0, 6);
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-5">আজ দাম বেড়েছে ▲</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">{risers.length === 0 && <p className="text-gray-500 col-span-full">দাম বৃদ্ধির তথ্য API থেকে পাওয়া যায়নি।</p>}
        {risers.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
        </section>
      <section>
        <h2 className="text-2xl font-bold mb-5">আজ দাম কমেছে ▼</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">{fallers.length === 0 && <p className="text-gray-500 col-span-full">দাম কমার তথ্য API থেকে পাওয়া যায়নি।</p>}
        {fallers.map((p) => <ProductCard key={p.id} product={p} />)}
        </div></section>
      <section id="সব-পণ্য" className="scroll-mt-10">
        <h2 className="text-2xl font-bold">সব পণ্য</h2>
        <p className="text-gray-500 mb-5">প্রয়োজনীয় সব পণ্যের আজকের বাজারদর দেখুন</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">{products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>{products.length === 0 && <p>এই মুহূর্তে পণ্যের তথ্য পাওয়া যাচ্ছে না।</p>}</section>
    </div>
  );
};
export default ProductSections;
