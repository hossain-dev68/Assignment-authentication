import type { Product, Category } from "@/types/product";
export const API = "https://openapi.programming-hero.com/api/bazardor";

export async function getProducts(): Promise<Product[]>() {
  try {
    const res = await fetch(`${API}/products`, { cache: "no-store" });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : data.data || [];
  } catch {
    return [];
  }
}

export async function getCategories(): Promise<Category[]>() {
  try {
    const res = await fetch(`${API}/categories`, { cache: "no-store" });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : data.data || [];
  } catch {
    return [];
  }
}

export function numberValue(value: unknown) {
  const bangla = "০১২৩৪৫৬৭৮৯";
  const text = String(value ?? 0).replace(/[০-৯]/g, (digit) => String(bangla.indexOf(digit)));
  return Number(text.replace(/[^0-9.-]/g, "")) || 0;
}

export function banglaNumber(value: unknown) {
  return numberValue(value).toLocaleString("bn-BD");
}

export function changeValue(product: Product): number {
  return product.change.pct;
}
