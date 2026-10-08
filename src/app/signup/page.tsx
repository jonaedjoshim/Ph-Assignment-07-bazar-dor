import type { Metadata } from "next";
import Link from "next/link";
import SignUpForm from "@/components/auth/SignUpForm";

export const metadata: Metadata = {
  title: "অ্যাকাউন্ট তৈরি করুন",
  description: "বাজার দর-এ নতুন অ্যাকাউন্ট তৈরি করুন",
};

export default function SignUpPage() {
  return (
    <div className="container-custom flex flex-col items-center py-12 sm:py-16">
      <div className="mb-7 text-center">
        <h1 className="text-3xl font-bold text-foreground">
          অ্যাকাউন্ট তৈরি করুন
        </h1>

        <p className="mt-2 text-sm text-muted">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>
      </div>

      <div className="surface-card w-full max-w-104 p-6 sm:p-7">
        <SignUpForm />
      </div>

      <Link
        href="/"
        className="mt-7 text-sm text-muted transition-colors hover:text-primary"
      >
        ← হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}
