"use client";

import { useEffect } from "react";
import toast from "react-hot-toast";
import ErrorState from "@/components/ui/ErrorState";

interface ErrorPageProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);

    toast.error("পেজটি লোড করতে সমস্যা হয়েছে", {
      id: "page-error",
    });
  }, [error]);

  return (
    <ErrorState
      code="500"
      title="কিছু একটা সমস্যা হয়েছে"
      description="দুঃখিত, পেজটি লোড করতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।"
      onRetry={reset}
    />
  );
}
