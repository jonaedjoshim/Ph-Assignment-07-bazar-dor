"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 48,
      easing: "ease-out",
    });
  }, []);

  return <>{children}</>;
}
