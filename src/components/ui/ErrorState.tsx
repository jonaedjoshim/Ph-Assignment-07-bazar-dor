import Link from "next/link";
import { FaArrowLeft, FaRotateRight } from "react-icons/fa6";

interface ErrorStateProps {
  title: string;
  description: string;
  code?: string;
  onRetry?: () => void;
}

export default function ErrorState({
  title,
  description,
  code,
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="container-custom flex min-h-[60vh] items-center justify-center py-12">
      <div className="surface-card w-full max-w-lg px-6 py-12 text-center sm:px-10">
        {code && (
          <h1 className="text-6xl font-bold text-primary sm:text-7xl">
            {code}
          </h1>
        )}

        <h2 className="mt-5 text-2xl font-bold text-foreground">{title}</h2>

        <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-muted">
          {description}
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          {onRetry && (
            <button
              type="button"
              onClick={onRetry}
              className="btn btn-outline gap-2 border-border text-foreground hover:border-primary hover:bg-surface-muted"
            >
              <FaRotateRight size={13} />
              আবার চেষ্টা করুন
            </button>
          )}

          <Link
            href="/"
            className="btn gap-2 border-0 bg-primary text-white hover:bg-primary-hover"
          >
            <FaArrowLeft size={13} />
            হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </div>
  );
}
