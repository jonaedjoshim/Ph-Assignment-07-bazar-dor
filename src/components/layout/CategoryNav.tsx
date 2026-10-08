"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = [
  { name: "চাল", slug: "chal", icon: "🍚" },
  { name: "ডাল", slug: "dal", icon: "🫘" },
  { name: "তেল", slug: "tel", icon: "🛢️" },
  { name: "সবজি", slug: "sobji", icon: "🥬" },
  { name: "মাছ", slug: "mach", icon: "🐟" },
  { name: "মাংস", slug: "mangsho", icon: "🍗" },
  { name: "ডিম-দুধ", slug: "dim-dudh", icon: "🥛" },
  { name: "মসলা", slug: "moshla", icon: "🌶️" },
];

export default function CategoryNav() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-border bg-white" aria-label="ক্যাটাগরি">
      <div className="container-custom">
        <div className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-none [&::-webkit-scrollbar]:hidden md:gap-2 lg:justify-between">
          {categories.map((category) => {
            const href = `/category/${category.slug}`;
            const isActive = pathname === href;

            return (
              <Link
                key={category.slug}
                href={href}
                className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-2 text-[13px] font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-foreground hover:bg-surface-muted"
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
