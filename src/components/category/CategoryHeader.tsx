import type { Category } from "@/types/category";

interface CategoryHeaderProps {
  category: Category;
  productCount: number;
}

export default function CategoryHeader({
  category,
  productCount,
}: CategoryHeaderProps) {
  const count = new Intl.NumberFormat("bn-BD").format(productCount);

  return (
    <section className="surface-card flex items-center gap-4 px-5 py-6 sm:px-7">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-surface-muted text-3xl sm:h-16 sm:w-16">
        {category.icon}
      </div>

      <div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          {category.nameBn}
        </h1>

        <p className="mt-1 text-sm text-muted">
          {count}টি পণ্যের আজকের দাম ও পরিবর্তন
        </p>
      </div>
    </section>
  );
}
