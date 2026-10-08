"use client";

import { useEffect } from "react";
import Link from "next/link";

interface GlobalErrorProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="bn">
      <body className="flex min-h-screen items-center justify-center bg-[#f0f5f1] px-4 text-[#202b23]">
        <div className="w-full max-w-lg rounded-2xl border border-[#dfe7df] bg-white px-6 py-12 text-center">
          <h1 className="text-5xl font-bold text-[#008a3e]">500</h1>

          <h2 className="mt-5 text-2xl font-bold">কিছু একটা সমস্যা হয়েছে</h2>

          <p className="mt-3 text-sm leading-7 text-[#68746b]">
            অ্যাপ্লিকেশনটি লোড করতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={reset}
              className="rounded-lg border border-[#dfe7df] px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-[#f4f7f4]"
            >
              আবার চেষ্টা করুন
            </button>

            <Link
              href="/"
              className="rounded-lg bg-[#008a3e] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#007533]"
            >
              হোম পেজে ফিরে যান
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
