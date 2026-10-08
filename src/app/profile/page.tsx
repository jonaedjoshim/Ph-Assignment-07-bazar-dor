import type { Metadata } from "next";
import ProfileCard from "@/components/profile/ProfileCard";
import ProfileInformation from "@/components/profile/ProfileInformation";
import { requireAuth } from "@/lib/require-auth";

export const metadata: Metadata = {
  title: "আমার প্রোফাইল",
  description: "বাজার দর অ্যাকাউন্টের প্রোফাইল তথ্য",
};

export default async function ProfilePage() {
  const session = await requireAuth("/profile");

  return (
    <div className="container-custom py-10 sm:py-14">
      <div className="mx-auto max-w-3xl">
        <div className="mb-7">
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            আমার প্রোফাইল
          </h1>

          <p className="mt-1 text-sm text-muted">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        <div className="space-y-5">
          <ProfileCard user={session.user} />

          <ProfileInformation
            name={session.user.name}
            email={session.user.email}
          />
        </div>
      </div>
    </div>
  );
}
