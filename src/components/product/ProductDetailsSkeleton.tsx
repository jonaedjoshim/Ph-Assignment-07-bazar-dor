export default function ProductDetailsSkeleton() {
  return (
    <div className="container-custom space-y-6 py-6 sm:space-y-8 sm:py-8">
      <div className="skeleton h-4 w-56" />

      <div className="surface-card flex flex-col justify-between gap-6 p-6 sm:flex-row">
        <div className="flex items-center gap-4">
          <div className="skeleton h-20 w-20 rounded-2xl" />

          <div className="space-y-3">
            <div className="skeleton h-8 w-48" />
            <div className="skeleton h-4 w-32" />
            <div className="skeleton h-4 w-56" />
          </div>
        </div>

        <div className="skeleton h-28 w-36 rounded-2xl" />
      </div>

      <div className="surface-card space-y-8 p-6">
        <div>
          <div className="skeleton mb-5 h-6 w-40" />

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="rounded-2xl border border-border p-5">
                <div className="skeleton h-4 w-24" />
                <div className="skeleton mt-3 h-7 w-28" />
                <div className="skeleton mt-3 h-3 w-36" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="skeleton mb-5 h-6 w-52" />

          <div className="overflow-hidden rounded-2xl border border-border">
            {Array.from({ length: 7 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-4 border-b border-border p-4 last:border-b-0"
              >
                <div className="skeleton h-4 w-28" />
                <div className="skeleton h-4 w-20" />
                <div className="skeleton h-4 w-16" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
