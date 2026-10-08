import type { Metadata } from "next";
import Link from "next/link";
import SignInForm from "@/components/auth/SignInForm";

export const metadata: Metadata = {
  title: "সাইন ইন",
  description: "বাজার দর অ্যাকাউন্টে সাইন ইন করুন",
};

export default function SignInPage() {
  return (
    <div className="container-custom flex flex-col items-center py-12 sm:py-16">
      <div className="mb-7 text-center">
        <h1 className="text-3xl font-bold text-foreground">সাইন ইন</h1>

        <p className="mt-2 text-sm text-muted">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
      </div>

      <div className="surface-card w-full max-w-104 p-6 sm:p-7">
        <SignInForm />
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
