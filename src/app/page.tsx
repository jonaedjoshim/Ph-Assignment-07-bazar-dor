export default function HomePage() {
  return (
    <div className="container-custom py-10 sm:py-16">
      <section className="surface-card px-6 py-12 sm:px-10 sm:py-16">
        <span className="inline-flex rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-primary">
          আজকের বাজারদর
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          আজকের বাজারের দাম এক নজরে
        </h2>
        <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত তথ্য এবং প্রতিদিনের দামের পরিবর্তন এক জায়গায়।
        </p>
        <div className="mt-8">
          <a href="#সব-পণ্য" className="button-primary">
            সব পণ্য দেখুন
          </a>
        </div>
      </section>

      <section id="সব-পণ্য" className="py-12">
        <h2 className="text-xl font-bold">সব পণ্য</h2>
        <p className="mt-2 text-sm text-muted">
          নিত্যপ্রয়োজনীয় পণ্যের সর্বশেষ বাজারদর এখানে দেখতে পারবেন।
        </p>
      </section>
    </div>
  );
}
