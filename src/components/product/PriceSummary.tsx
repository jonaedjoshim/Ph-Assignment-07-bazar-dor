import type { Product } from "@/types/product";
import { getProductPriceSummary } from "@/lib/api/products";
import { formatPrice } from "@/lib/formatters";

interface PriceSummaryProps {
  product: Product;
}

export default function PriceSummary({ product }: PriceSummaryProps) {
  const summary = getProductPriceSummary(product);

  const priceItems = [
    {
      label: "সর্বনিম্ন দাম",
      value: summary.min,
      description: "সবচেয়ে কম দামের বাজার",
      color: "text-success",
    },
    {
      label: "সর্বাধিক দাম",
      value: summary.max,
      description: "সবচেয়ে বেশি দামের বাজার",
      color: "text-danger",
    },
    {
      label: "গড় দাম",
      value: summary.average,
      description: `${formatPrice(product.today)} প্রতি ${product.unit}-এর হিসাবে`,
      color: "text-primary",
    },
  ];

  return (
    <section>
      <h2 className="mb-4 text-lg font-bold text-foreground">
        দামের সারসংক্ষেপ
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {priceItems.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-border bg-white p-5"
          >
            <p className="text-xs text-muted">{item.label}</p>

            <p className={`mt-1 text-2xl font-bold ${item.color}`}>
              {formatPrice(item.value)}
            </p>

            <p className="mt-1 text-xs text-muted">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
