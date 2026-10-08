import type { Product } from "@/types/product";
import ProductCard from "@/components/product/ProductCard";

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
  icon?: string;
  id?: string;
}

export default function ProductSection({
  title,
  subtitle,
  products,
  icon,
  id,
}: ProductSectionProps) {
  if (!products.length) {
    return null;
  }

  return (
    <section id={id} className="scroll-mt-8" data-aos="fade-up">
      <div className="mb-5">
        <h2 className="flex items-center gap-2 text-xl font-bold text-foreground">
          {icon && <span>{icon}</span>}
          {title}
        </h2>

        {subtitle && <p className="mt-1.5 text-sm text-muted">{subtitle}</p>}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
