export default function UpdateProfileLoading() {
  return (
    <div className="container-custom py-10 sm:py-14">
      <div className="mx-auto max-w-xl">
        <div className="skeleton mb-7 h-5 w-40" />

        <div className="mb-7 space-y-3">
          <div className="skeleton h-8 w-52" />
          <div className="skeleton h-4 w-64 max-w-full" />
        </div>

        <div className="surface-card space-y-5 p-6 sm:p-8">
          <div className="space-y-3">
            <div className="skeleton h-4 w-16" />
            <div className="skeleton h-11 w-full rounded-lg" />
          </div>

          <div className="skeleton h-11 w-full rounded-lg" />

          <div className="skeleton h-11 w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
}
