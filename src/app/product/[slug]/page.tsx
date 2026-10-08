import ErrorState from "@/components/ui/ErrorState";

export default function ProductNotFound() {
  return (
    <ErrorState
      code="404"
      title="পণ্যটি খুঁজে পাওয়া যায়নি"
      description="আপনি যে পণ্যটির বিস্তারিত তথ্য খুঁজছেন সেটি পাওয়া যায়নি। অন্য পণ্যের দাম দেখতে হোম পেজে ফিরে যান।"
    />
  );
}
