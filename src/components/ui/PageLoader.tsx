interface PageLoaderProps {
  message?: string;
}

export default function PageLoader({
  message = "লোড হচ্ছে...",
}: PageLoaderProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="container-custom flex min-h-[50vh] flex-col items-center justify-center gap-4"
    >
      <span className="loading loading-spinner loading-lg text-primary" />

      <p className="text-sm font-medium text-muted">{message}</p>
    </div>
  );
}

