import Hero from "@/components/home/Hero";
import ProductSection from "@/components/home/ProductSection";
import { getProducts, getTopRisers, getTopFallers } from "@/lib/api/products";

export default async function HomePage() {
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
            সাময়িক সমস্যার কারণে বাজারদরের তথ্য লোড করা সম্ভব হয়নি। কিছুক্ষণ
            পর আবার চেষ্টা করুন।
          </p>

          <a
            href="/"
            className="btn mt-6 border-0 bg-primary text-white hover:bg-primary-hover"
          >
            আবার চেষ্টা করুন
          </a>
        </div>
      </div>
    );
  }

  const risers = getTopRisers(products, 6);
  const fallers = getTopFallers(products, 6);

  return (
    <div className="container-custom space-y-12 py-6 sm:space-y-14 sm:py-8">
      <Hero />

      <ProductSection title="আজ দাম বেড়েছে" icon="▲" products={risers} />

      <ProductSection title="আজ দাম কমেছে" icon="▼" products={fallers} />

      <ProductSection
        id="সব-পণ্য"
        title="সব পণ্য"
        subtitle={`মোট ${new Intl.NumberFormat("bn-BD").format(
          products.length,
        )}টি পণ্য দেখানো হচ্ছে`}
        products={products}
      />
    </div>
  );
}
