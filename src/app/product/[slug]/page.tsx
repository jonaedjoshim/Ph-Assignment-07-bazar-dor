import Link from "next/link";
import { notFound } from "next/navigation";
import { FaChevronRight } from "react-icons/fa6";
import ProductSummary from "@/components/product/ProductSummary";
import PriceSummary from "@/components/product/PriceSummary";
import MarketPriceTable from "@/components/product/MarketPriceTable";
import { requireAuth } from "@/lib/require-auth";
import { getProducts, getProductById } from "@/lib/api/products";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  let products;

  try {
    products = await getProducts();
  } catch {
    return (
      <div className="container-custom py-16">
        <div className="surface-card mx-auto max-w-xl px-6 py-12 text-center">
          <h1 className="text-2xl font-bold text-foreground">
            পণ্যের তথ্য পাওয়া যাচ্ছে না
          </h1>

          <p className="mt-3 text-sm text-muted">
            সাময়িক সমস্যার কারণে পণ্যের তথ্য লোড করা সম্ভব হয়নি।
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

  const matchedProduct = products.find((product) => product.slug === slug);

  if (!matchedProduct) {
    notFound();
  }

  await requireAuth(`/product/${slug}`);

  const product = await getProductById(matchedProduct.id);

  if (!product) {
    return (
      <div className="container-custom py-16">
        <div className="surface-card mx-auto max-w-xl px-6 py-12 text-center">
          <h1 className="text-2xl font-bold text-foreground">
            বিস্তারিত তথ্য পাওয়া যাচ্ছে না
          </h1>

          <p className="mt-3 text-sm text-muted">
            এই পণ্যের বিস্তারিত তথ্য সাময়িকভাবে পাওয়া যাচ্ছে না।
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

  return (
    <div className="container-custom space-y-6 py-6 sm:space-y-8 sm:py-8">
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-2 text-xs text-muted"
      >
        <Link href="/" className="hover:text-primary">
          হোম
        </Link>

        <FaChevronRight size={9} />

        <Link
          href={`/category/${product.category}`}
          className="hover:text-primary"
        >
          {product.categoryNameBn}
        </Link>

        <FaChevronRight size={9} />

        <span className="font-medium text-foreground">{product.nameBn}</span>
      </nav>

      <ProductSummary product={product} />

      <div className="surface-card space-y-8 p-5 sm:p-6">
        <PriceSummary product={product} />

        <MarketPriceTable markets={product.markets} />
      </div>
    </div>
  );
}
