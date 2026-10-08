import Link from "next/link";
import type { Product } from "@/types/product";
import {
  formatPrice,
  formatProductUnit,
  formatPriceChange,
  getChangeColor,
} from "@/lib/formatters";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block h-full"
      aria-label={`${product.nameBn} এর বিস্তারিত দেখুন`}
    >
      <article className="card h-full border border-border bg-white shadow-none transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md">
        <div className="card-body gap-3 p-4 sm:p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-muted text-2xl">
              {product.image}
            </div>

            <div className="min-w-0">
              <h3 className="truncate text-[16px] leading-6 font-bold text-foreground group-hover:text-primary">
                {product.nameBn}
              </h3>

              <p className="text-xs text-muted">
                {formatProductUnit(product.unit)}
              </p>
            </div>
          </div>

          <div className="mt-1 flex items-end justify-between gap-2">
            <div>
              <p className="text-xs text-muted">আজকের দাম</p>

              <p className="mt-0.5 text-lg leading-6 font-bold text-foreground">
                {formatPrice(product.today)}
              </p>
            </div>

            <span
              className={`badge shrink-0 border-0 bg-surface-muted px-2.5 py-2 text-xs font-semibold ${getChangeColor(
                product.change.dir,
              )}`}
            >
              {formatPriceChange(product.change.dir, product.change.pct)}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
