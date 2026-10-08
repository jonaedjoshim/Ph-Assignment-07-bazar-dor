import Image from "next/image";
import Link from "next/link";

function getBanglaDate() {
  return new Intl.DateTimeFormat("bn-BD", {
    timeZone: "Asia/Dhaka",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());
}

export default function Hero() {
  return (
    <section
      data-aos="fade-up"
      className="surface-card overflow-hidden px-5 py-7 sm:px-8 sm:py-10 lg:px-10"
    >
      <div className="grid items-center gap-8 md:grid-cols-[1.5fr_1fr]">
        <div>
          <span className="badge border-0 bg-green-50 px-3 py-3 text-xs font-medium text-primary">
            {getBanglaDate()}
          </span>

          <h1 className="mt-4 max-w-2xl text-3xl leading-tight font-bold tracking-tight text-foreground sm:text-4xl lg:text-[42px]">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <Link
            href="#সব-পণ্য"
            className="btn mt-7 border-0 bg-primary px-6 text-white shadow-sm hover:bg-primary-hover"
          >
            সব পণ্য দেখুন
          </Link>
        </div>

        <div className="flex items-center justify-center md:justify-end">
          <Image
            src="/images/bazar-hero.png"
            alt="নিত্যপ্রয়োজনীয় বাজারের পণ্য"
            width={400}
            height={320}
            priority
            className="h-auto w-full max-w-65 object-contain sm:max-w-[320px] lg:max-w-87.5"
          />
        </div>
      </div>
    </section>
  );
}
