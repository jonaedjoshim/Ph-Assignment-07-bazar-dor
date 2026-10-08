import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import { Toaster } from "react-hot-toast";
import SiteHeader from "@/components/layout/SiteHeader";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "বাজার দর | Bazar Dor",
    template: "%s | বাজার দর",
  },
  description:
    "চাল, ডাল, তেল, সবজি, মাছ, মাংস ও নিত্যপ্রয়োজনীয় পণ্যের আজকের বাজারদর এবং দামের পরিবর্তন এক জায়গায় দেখুন।",
  keywords: [
    "বাজার দর",
    "Bazar Dor",
    "Bangladesh Market Price",
    "Daily Bazar Price",
    "আজকের বাজারদর",
  ],
  icons: {
    icon: "/images/logo-icon.png",
    shortcut: "/images/logo-icon.png",
    apple: "/images/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" data-theme="light" data-scroll-behavior="smooth">
      <body className={hindSiliguri.variable}>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />

          <main className="flex-1">{children}</main>

          <Footer />
        </div>

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3500,
            style: {
              background: "#ffffff",
              color: "#202b23",
              border: "1px solid #dfe7df",
              fontFamily: "var(--font-hind-siliguri)",
            },
            success: {
              iconTheme: {
                primary: "#008a3e",
                secondary: "#ffffff",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef3434",
                secondary: "#ffffff",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
