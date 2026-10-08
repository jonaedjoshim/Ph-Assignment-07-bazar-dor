"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Category } from "@/types/category";

interface CategoryNavProps {
  categories: Category[];
}

export default function CategoryNav({ categories }: CategoryNavProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="পণ্যের ক্যাটাগরি"
      className="border-b border-border bg-white"
    >
      <div className="container-custom">
        <div className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-none [&::-webkit-scrollbar]:hidden sm:gap-2">
          {categories.map((category) => {
            const href = `/category/${category.slug}`;
            const active = pathname === href;

            return (
              <Link
                key={category.id}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3.5 py-2 text-[13px] font-semibold whitespace-nowrap transition-colors sm:px-4 ${
                  active
                    ? "bg-primary text-white"
                    : "text-foreground hover:bg-surface-muted"
                }`}
              >
                <span>{category.icon}</span>

                <span>{category.nameBn}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
