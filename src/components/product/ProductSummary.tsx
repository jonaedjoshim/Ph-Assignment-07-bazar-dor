import type { Product } from "@/types/product";
import {
  formatProductUnit,
  formatPriceChange,
  getChangeColor,
  getProductDescription,
} from "@/lib/formatters";

interface ProductSummaryProps {
  product: Product;
}

export default function ProductSummary({ product }: ProductSummaryProps) {
  return (
    <section className="surface-card flex flex-col justify-between gap-5 p-5 sm:flex-row sm:items-center sm:p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-surface-muted text-4xl sm:h-20 sm:w-20">
          {product.image}
        </div>

        <div className="min-w-0">
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            {product.nameBn}
          </h1>

          <p className="mt-1 text-sm text-muted">
            {formatProductUnit(product.unit)} · {product.categoryNameBn}
          </p>

          <p className="mt-2 text-sm text-foreground">
            {getProductDescription(product)}
          </p>
        </div>
      </div>

      <div className="flex min-w-33.75 flex-col items-center rounded-2xl bg-surface-muted px-5 py-4 text-center sm:self-center">
        <p className="text-xs text-muted">আজকের দাম</p>

        <p className="mt-1 text-3xl font-bold text-foreground">
          {new Intl.NumberFormat("bn-BD").format(product.today)}
        </p>

        <p className="text-xs text-muted">
          টাকা / {formatProductUnit(product.unit).replace("প্রতি ", "")}
        </p>

        <span
          className={`mt-2 text-xs font-semibold ${getChangeColor(
            product.change.dir,
          )}`}
        >
          {formatPriceChange(product.change.dir, product.change.pct)}
        </span>
      </div>
    </section>
  );
}
