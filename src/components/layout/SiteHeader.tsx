import Navbar from "./Navbar";
import { getProducts } from "@/lib/api/products";
import { getCategories } from "@/lib/api/categories";
import type { Product } from "@/types/product";
import type { Category } from "@/types/category";

export default async function SiteHeader() {
  const [productsResult, categoriesResult] = await Promise.allSettled([
    getProducts(),
    getCategories(),
  ]);

  const products: Product[] =
    productsResult.status === "fulfilled" ? productsResult.value : [];

  const categories: Category[] =
    categoriesResult.status === "fulfilled" ? categoriesResult.value : [];

  return <Navbar products={products} categories={categories} />;
}
