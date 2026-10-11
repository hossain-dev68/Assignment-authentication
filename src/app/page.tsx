import Banner from "@/components/Banner";
import ProductSections from "@/components/ProductSections";
import { getProducts } from "@/lib/bazar";

export default async function Home() {
  const products = await getProducts();
  return <main><div className="px-4 pt-6"><Banner /></div><ProductSections products={products} /></main>;
}
