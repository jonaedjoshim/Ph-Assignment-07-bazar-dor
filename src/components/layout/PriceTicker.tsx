"use client";

import Marquee from "react-fast-marquee";
import type { Product } from "@/types/product";
import {
  formatPriceWithUnit,
  formatPriceChange,
  getChangeColor,
} from "@/lib/formatters";

interface PriceTickerProps {
  products: Product[];
}

export default function PriceTicker({ products }: PriceTickerProps) {
  if (!products.length) {
    return null;
  }

  return (
    <div className="overflow-hidden border-b border-border bg-white">
      <Marquee speed={40} gradient={false} pauseOnHover autoFill>
        {products.map((product) => (
          <div
            key={product.id}
            className="flex h-9 shrink-0 items-center gap-1.5 border-r border-border px-4 text-[12px] whitespace-nowrap sm:text-[13px]"
          >
            <span>{product.image}</span>

            <span className="font-medium text-foreground">
              {product.nameBn}
            </span>

            <span className="text-foreground">
              {formatPriceWithUnit(product.today, product.unit)}
            </span>

            <span
              className={`font-semibold ${getChangeColor(product.change.dir)}`}
            >
              {formatPriceChange(product.change.dir, product.change.pct)}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
