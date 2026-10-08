import type { Metadata } from "next";
import ErrorState from "@/components/ui/ErrorState";

export const metadata: Metadata = {
  title: "পেজ পাওয়া যায়নি",
  description: "আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি।",
};

export default function NotFound() {
  return (
    <ErrorState
      code="404"
      title="পেজটি খুঁজে পাওয়া যায়নি"
      description="আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে অথবা ঠিকানাটি সঠিক নয়। হোম পেজ থেকে আবার শুরু করুন।"
    />
  );
}
