import { fetchApi } from "./config";
import type { Category } from "@/types/category";

export async function getCategories(): Promise<Category[]> {
  return fetchApi<Category[]>("/categories");
}

export async function getCategoryBySlug(
  slug: string,
): Promise<Category | null> {
  try {
    return await fetchApi<Category>(`/categories/${encodeURIComponent(slug)}`);
  } catch {
    return null;
  }
}
