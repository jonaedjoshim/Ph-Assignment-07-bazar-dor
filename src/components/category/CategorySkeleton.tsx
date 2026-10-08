function CategoryCardSkeleton() {
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

export default function CategorySkeleton() {
  return (
    <div className="container-custom space-y-6 py-6 sm:py-8">
      <div className="surface-card flex items-center gap-4 p-6">
        <div className="skeleton h-16 w-16 rounded-2xl" />

        <div className="space-y-3">
          <div className="skeleton h-7 w-32" />
          <div className="skeleton h-4 w-52" />
        </div>
      </div>

      <div className="surface-card flex min-h-[66px] items-center justify-between px-5">
        <div className="skeleton h-4 w-28" />
        <div className="skeleton h-9 w-40 rounded-lg" />
      </div>

      <div className="skeleton h-4 w-44" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <CategoryCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
