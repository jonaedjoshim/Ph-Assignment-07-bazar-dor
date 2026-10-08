import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

export default function NotFound() {
  return (
    <div className="container-custom flex min-h-[60vh] items-center justify-center py-12">
      <div className="surface-card w-full max-w-lg px-6 py-12 text-center sm:px-10">
        <h1 className="text-6xl font-bold text-primary sm:text-7xl">404</h1>

        <h2 className="mt-5 text-2xl font-bold text-foreground">
          পেজটি খুঁজে পাওয়া যায়নি
        </h2>

        <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-muted">
          আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি। হোম পেজ থেকে আবার শুরু করুন।
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
