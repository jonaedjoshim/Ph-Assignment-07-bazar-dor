import ErrorState from "@/components/ui/ErrorState";

export default function CategoryNotFound() {
  return (
    <ErrorState
      code="404"
      title="ক্যাটাগরি খুঁজে পাওয়া যায়নি"
      description="আপনি যে ক্যাটাগরিটি খুঁজছেন সেটি পাওয়া যায়নি। হোম পেজ থেকে অন্য ক্যাটাগরি নির্বাচন করুন।"
    />
  );
}
