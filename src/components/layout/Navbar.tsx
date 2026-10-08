"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CategoryNav from "./CategoryNav";
import PriceTicker from "./PriceTicker";

function getBanglaDate() {
  return new Intl.DateTimeFormat("bn-BD", {
    timeZone: "Asia/Dhaka",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());
}

export default function Navbar() {
  const pathname = usePathname();
  const isSignInPage = pathname === "/signin";
  const isSignUpPage = pathname === "/signup";

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="border-b border-border bg-white">
        <div className="container-custom flex min-h-17 items-center justify-between gap-3">
          <Link href="/" className="flex min-w-0 items-center gap-2.5">
            <Image
              src="/images/logo-icon.png"
              alt="বাজার দর"
              width={40}
              height={40}
              className="h-10 w-10 rounded-xl object-cover"
              priority
            />
            <div className="min-w-0">
              <p className="text-[19px] leading-6 font-bold text-foreground">
                বাজার দর
              </p>
              <p className="truncate text-[11px] leading-4 text-muted">
                {getBanglaDate()}
              </p>
            </div>
          </Link>

          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            <Link
              href="/signin"
              className={`btn btn-ghost btn-sm h-9 min-h-9 px-3 text-xs font-semibold sm:text-sm ${
                isSignInPage ? "text-primary" : "text-foreground"
              }`}
            >
              সাইন ইন
            </Link>
            <Link
              href="/signup"
              className={`btn btn-sm h-9 min-h-9 border-none px-4 text-xs font-semibold text-white sm:text-sm ${
                isSignUpPage
                  ? "bg-primary-hover"
                  : "bg-primary hover:bg-primary-hover"
              }`}
            >
              সাইন আপ
            </Link>
          </div>
        </div>
      </div>

      <CategoryNav />
      <PriceTicker />
    </header>
  );
}
