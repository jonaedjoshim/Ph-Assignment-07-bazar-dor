import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import UpdateProfileForm from "@/components/profile/UpdateProfileForm";
import { requireAuth } from "@/lib/require-auth";

export const metadata: Metadata = {
  title: "প্রোফাইল আপডেট",
  description: "বাজার দর অ্যাকাউন্টের নাম পরিবর্তন করুন",
};

export default async function UpdateProfilePage() {
  const session = await requireAuth("/profile/update");

  return (
    <div className="container-custom py-10 sm:py-14">
      <div className="mx-auto max-w-xl">
        <Link
          href="/profile"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted hover:text-primary"
        >
          <FaArrowLeft size={13} />
          প্রোফাইলে ফিরে যান
        </Link>

        <div className="mb-7">
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            প্রোফাইল আপডেট
          </h1>

          <p className="mt-2 text-sm text-muted">
            আপনার অ্যাকাউন্টের নাম পরিবর্তন করুন।
          </p>
        </div>

        <div className="surface-card p-6 sm:p-8">
          <UpdateProfileForm currentName={session.user.name} />
        </div>
      </div>
    </div>
  );
}
