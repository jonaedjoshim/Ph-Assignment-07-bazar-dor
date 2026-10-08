import { fetchApi } from "./config";
import type { Product, ProductPriceSummary } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
  return fetchApi<Product[]>("/products");
}

export async function getProductsByCategory(
  category: string,
): Promise<Product[]> {
  const slug = encodeURIComponent(category);

  return fetchApi<Product[]>(`/products?category=${slug}`);
}

export async function getProductById(
  id: number | string,
): Promise<Product | null> {
  try {
    const product = await fetchApi<Product>(
      `/products/${encodeURIComponent(String(id))}`,
    );

    return product;
  } catch {
    return null;
  }
}

export function getTopRisers(products: Product[], limit = 6): Product[] {
  return products
    .filter((product) => product.change.dir === "up")
    .sort((a, b) => Math.abs(b.change.pct) - Math.abs(a.change.pct))
    .slice(0, limit);
}

export function getTopFallers(products: Product[], limit = 6): Product[] {
  return products
    .filter((product) => product.change.dir === "down")
    .sort((a, b) => Math.abs(b.change.pct) - Math.abs(a.change.pct))
    .slice(0, limit);
}

export function getProductPriceSummary(product: Product): ProductPriceSummary {
  if (!product.markets.length) {
    return {
      min: product.today,
      max: product.today,
      average: product.today,
    };
  }

  const minimumPrices = product.markets.map((market) => market.min);

  const maximumPrices = product.markets.map((market) => market.max);

  const averages = product.markets.map(
    (market) => (market.min + market.max) / 2,
  );

  const average =
    averages.reduce((total, price) => total + price, 0) / averages.length;

  return {
    min: Math.min(...minimumPrices),
    max: Math.max(...maximumPrices),
    average,
  };
}

export function getMarketAverage(min: number, max: number): number {
  return (min + max) / 2;
}
