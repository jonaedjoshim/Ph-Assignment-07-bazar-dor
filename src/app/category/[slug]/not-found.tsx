import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

export default function CategoryNotFound() {
  return (
    <div className="container-custom flex min-h-[60vh] items-center justify-center py-12">
      <div className="surface-card w-full max-w-lg px-6 py-12 text-center sm:px-10">
        <div className="text-6xl font-bold text-primary">404</div>

        <h1 className="mt-5 text-2xl font-bold text-foreground">
          ক্যাটাগরি খুঁজে পাওয়া যায়নি
        </h1>

        <p className="mt-3 text-sm leading-7 text-muted">
          আপনি যে ক্যাটাগরিটি খুঁজছেন সেটি পাওয়া যায়নি। অনুগ্রহ করে হোম পেজ
          থেকে অন্য ক্যাটাগরি নির্বাচন করুন।
        </p>

        <Link
          href="/"
          className="btn mt-7 gap-2 border-0 bg-primary text-white hover:bg-primary-hover"
        >
          <FaArrowLeft size={13} />
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
}
