"use client";

import { useMemo, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import ProductCard from "@/components/product/ProductCard";
import type { Product } from "@/types/product";
import { formatBanglaNumber } from "@/lib/formatters";
import Link from "next/link";

type SortOption = "default" | "low-to-high" | "high-to-low";

interface CategoryProductsProps {
  products: Product[];
}

export default function CategoryProducts({ products }: CategoryProductsProps) {
  const [sortBy, setSortBy] = useState<SortOption>("default");

  const sortedProducts = useMemo(() => {
    const result = [...products];

    if (sortBy === "low-to-high") {
      result.sort((a, b) => a.today - b.today);
    }

    if (sortBy === "high-to-low") {
      result.sort((a, b) => b.today - a.today);
    }

    return result;
  }, [products, sortBy]);

  return (
    <div>
      <div className="surface-card mb-4 flex min-h-[66px] items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="text-sm font-medium text-muted">পণ্যের তালিকা</div>

        <div className="flex items-center gap-3">
          <label
            htmlFor="category-sort"
            className="shrink-0 text-sm text-muted"
          >
            সাজান
          </label>

          <div className="relative">
            <select
              id="category-sort"
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value as SortOption)}
              className="select select-bordered select-sm w-[155px] appearance-none border-border bg-white pr-8 text-xs text-foreground focus:border-primary focus:outline-none sm:w-[190px] sm:text-sm"
            >
              <option value="default">ডিফল্ট</option>
              <option value="low-to-high">দাম: কম থেকে বেশি</option>
              <option value="high-to-low">দাম: বেশি থেকে কম</option>
            </select>

            <FaChevronDown
              size={10}
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-foreground"
            />
          </div>
        </div>
      </div>

      <p className="mb-4 text-sm text-muted">
        মোট {formatBanglaNumber(sortedProducts.length)}টি পণ্য দেখানো হচ্ছে
      </p>

      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="surface-card flex min-h-60 flex-col items-center justify-center px-6 py-10 text-center">
          <h2 className="text-xl font-bold text-foreground">
            এই ক্যাটাগরিতে কোনো পণ্য নেই
          </h2>

          <p className="mt-2 text-sm text-muted">
            বর্তমানে এই ক্যাটাগরির কোনো পণ্যের তথ্য পাওয়া যাচ্ছে না।
          </p>

          <Link
            href="/"
            className="btn mt-6 border-0 bg-primary text-white hover:bg-primary-hover"
          >
            হোম পেজে ফিরে যান
          </Link>
        </div>
      )}
    </div>
  );
}
