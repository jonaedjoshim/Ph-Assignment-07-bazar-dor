"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      AOS.init({
        duration: 600,
        easing: "ease-out-cubic",
        once: true,
        offset: 40,
        disable: () =>
          window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      });

      AOS.refreshHard();
    }, 300);

    return () => {
      window.clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
