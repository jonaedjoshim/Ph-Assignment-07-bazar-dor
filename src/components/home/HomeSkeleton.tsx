function ProductCardSkeleton() {
  return (
    <div className="card border border-border bg-white shadow-none">
      <div className="card-body gap-4 p-4 sm:p-5">
        <div className="flex items-center gap-3">
          <div className="skeleton h-12 w-12 rounded-xl" />

          <div className="flex-1 space-y-2">
            <div className="skeleton h-4 w-32" />
            <div className="skeleton h-3 w-20" />
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div className="space-y-2">
            <div className="skeleton h-3 w-20" />
            <div className="skeleton h-5 w-24" />
          </div>

          <div className="skeleton h-6 w-16 rounded-full" />
        </div>
      </div>
    </div>
  );
}

function ProductSectionSkeleton() {
  return (
    <section className="space-y-5">
      <div className="skeleton h-7 w-48" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}

export default function HomeSkeleton() {
  return (
    <div className="container-custom space-y-12 py-6 sm:py-8">
      <div className="surface-card grid items-center gap-8 p-6 sm:p-10 md:grid-cols-2">
        <div className="space-y-5">
          <div className="skeleton h-7 w-48 rounded-full" />
          <div className="skeleton h-10 w-full max-w-md" />
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-4/5" />
          <div className="skeleton h-11 w-36 rounded-lg" />
        </div>

        <div className="skeleton mx-auto h-56 w-56 rounded-2xl" />
      </div>

      <ProductSectionSkeleton />
      <ProductSectionSkeleton />
      <ProductSectionSkeleton />
    </div>
  );
}
