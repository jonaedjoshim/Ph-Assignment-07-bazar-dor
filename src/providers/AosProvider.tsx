"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosProvider() {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      AOS.init({
        duration: 650,
        easing: "ease-out-cubic",
        once: true,
        offset: 50,
        disable: () =>
          window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      });
    }, 300);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return null;
}
