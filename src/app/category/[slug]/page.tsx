import { notFound } from "next/navigation";
import Link from "next/link";
import CategoryHeader from "@/components/category/CategoryHeader";
import CategoryProducts from "@/components/category/CategoryProducts";
import { getCategories } from "@/lib/api/categories";
import { getProductsByCategory } from "@/lib/api/products";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  const categories = await getCategories().catch(() => null);

  if (!categories) {
    return (
      <div className="container-custom py-10">
        <div className="surface-card px-6 py-12 text-center">
          <h1 className="text-2xl font-bold">
            ক্যাটাগরির তথ্য পাওয়া যাচ্ছে না
          </h1>

          <p className="mt-3 text-sm text-muted">
            সাময়িক সমস্যার কারণে তথ্য লোড করা সম্ভব হয়নি।
          </p>

          <Link
            href="/"
            className="btn mt-6 border-0 bg-primary text-white hover:bg-primary-hover"
          >
            হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    );
  }

  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  const products = await getProductsByCategory(slug).catch(() => null);

  if (!products) {
    return (
      <div className="container-custom py-10">
        <div className="surface-card px-6 py-12 text-center">
          <h1 className="text-2xl font-bold">পণ্যের তথ্য পাওয়া যাচ্ছে না</h1>

          <p className="mt-3 text-sm text-muted">
            বাজারদরের তথ্য লোড করতে সমস্যা হয়েছে। কিছুক্ষণ পর আবার চেষ্টা করুন।
          </p>

          <Link
            href={`/category/${slug}`}
            className="btn mt-6 border-0 bg-primary text-white hover:bg-primary-hover"
          >
            আবার চেষ্টা করুন
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom space-y-6 py-6 sm:py-8">
      <CategoryHeader category={category} productCount={products.length} />

      <CategoryProducts products={products} />
    </div>
  );
}
