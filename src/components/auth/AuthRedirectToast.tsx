"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export default function AuthRedirectToast() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("reason") === "auth-required") {
      toast.error("বিস্তারিত তথ্য দেখতে আগে সাইন ইন করুন", {
        id: "auth-required",
      });
    }
  }, [searchParams]);

  return null;
}
