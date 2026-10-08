export default function ProfileLoading() {
  return (
    <div className="container-custom py-10 sm:py-14">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="space-y-3">
          <div className="skeleton h-8 w-48" />
          <div className="skeleton h-4 w-64" />
        </div>

        <div className="surface-card flex items-center gap-4 p-6">
          <div className="skeleton h-18 w-18 rounded-2xl" />

          <div className="space-y-3">
            <div className="skeleton h-6 w-40" />
            <div className="skeleton h-4 w-52" />
          </div>
        </div>

        <div className="surface-card space-y-6 p-6">
          <div className="skeleton h-6 w-44" />

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-3">
              <div className="skeleton h-4 w-16" />
              <div className="skeleton h-11 w-full rounded-lg" />
            </div>

            <div className="space-y-3">
              <div className="skeleton h-4 w-16" />
              <div className="skeleton h-11 w-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
