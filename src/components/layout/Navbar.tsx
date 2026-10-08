"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import CategoryNav from "./CategoryNav";
import PriceTicker from "./PriceTicker";
import UserDropdown from "./UserDropdown";
import type { Product } from "@/types/product";
import type { Category } from "@/types/category";

interface NavbarProps {
  categories: Category[];
  products: Product[];
}

export default function Navbar({ categories, products }: NavbarProps) {
  const pathname = usePathname();
  const { data: session, isPending } = useSession();

  const isSignIn = pathname === "/signin";
  const isSignUp = pathname === "/signup";

  const banglaDate = new Intl.DateTimeFormat("bn-BD", {
    timeZone: "Asia/Dhaka",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <header className="relative z-40 w-full">
      <div className="border-b border-border bg-white">
        <div className="container-custom">
          <div className="flex min-h-16 items-center justify-between gap-3">
            <Link href="/" className="flex min-w-0 items-center gap-2.5">
              <Image
                src="/images/logo-icon.png"
                alt="বাজার দর"
                width={40}
                height={40}
                className="h-10 w-10 shrink-0 rounded-xl border-2 border-border p-2 object-contain"
                priority
              />

              <div>
                <div className="text-[19px] leading-6 font-bold text-foreground">
                  বাজার দর
                </div>

                <p className="text-[11px] leading-4 text-muted">{banglaDate}</p>
              </div>
            </Link>

            <div className="flex shrink-0 items-center gap-2">
              {isPending ? (
                <div className="flex items-center gap-2">
                  <div className="skeleton h-9 w-9 rounded-lg" />
                  <div className="skeleton hidden h-4 w-20 sm:block" />
                </div>
              ) : session?.user ? (
                <UserDropdown user={session.user} />
              ) : (
                <>
                  <Link
                    href="/signin"
                    className={`btn btn-ghost btn-sm ${
                      isSignIn ? "text-primary" : ""
                    }`}
                  >
                    সাইন ইন
                  </Link>

                  <Link
                    href="/signup"
                    className={`btn btn-sm border-0 bg-primary text-white hover:bg-primary-hover sm:btn-md ${
                      isSignUp ? "bg-primary-hover" : ""
                    }`}
                  >
                    সাইন আপ
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <CategoryNav categories={categories} />

      <PriceTicker products={products} />
    </header>
  );
}
