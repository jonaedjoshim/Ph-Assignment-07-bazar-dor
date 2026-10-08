"use client";

import Marquee from "react-fast-marquee";

const tickerProducts = [
  {
    id: 1,
    name: "স্বর্ণাছি চাল",
    icon: "🍚",
    price: "১৪৮",
    unit: "কেজি",
    change: "২.১",
    direction: "up",
  },
  {
    id: 2,
    name: "মিনিকেট চাল",
    icon: "🍚",
    price: "৯৯",
    unit: "কেজি",
    change: "২.৯",
    direction: "down",
  },
  {
    id: 3,
    name: "বাটাম সাইজ চাল",
    icon: "🍚",
    price: "৬৬",
    unit: "কেজি",
    change: "৩.১",
    direction: "up",
  },
  {
    id: 4,
    name: "মসুর ডাল",
    icon: "🫘",
    price: "১৪২",
    unit: "কেজি",
    change: "২.৯",
    direction: "up",
  },
  {
    id: 5,
    name: "ছোলা",
    icon: "🫘",
    price: "১২০",
    unit: "কেজি",
    change: "২.৪",
    direction: "down",
  },
  {
    id: 6,
    name: "আমন ডাল",
    icon: "🫘",
    price: "১৩৬",
    unit: "কেজি",
    change: "৩.৫",
    direction: "up",
  },
  {
    id: 7,
    name: "পেঁয়াজ",
    icon: "🧅",
    price: "৫৪",
    unit: "কেজি",
    change: "২.৫",
    direction: "up",
  },
  {
    id: 8,
    name: "আলু",
    icon: "🥔",
    price: "৩০",
    unit: "কেজি",
    change: "১.৫",
    direction: "down",
  },
];

export default function PriceTicker() {
  return (
    <div className="border-b border-border bg-white">
      <Marquee pauseOnHover speed={38} gradient={false} autoFill>
        {tickerProducts.map((product) => (
          <div
            key={product.id}
            className="flex h-9 items-center gap-1.5 border-r border-border px-4 text-[12px] whitespace-nowrap sm:text-[13px]"
          >
            <span>{product.icon}</span>
            <span className="font-medium">{product.name}</span>
            <span>
              {product.price} টাকা/{product.unit}
            </span>
            <span
              className={`font-semibold ${
                product.direction === "up" ? "text-danger" : "text-success"
              }`}
            >
              {product.direction === "up" ? "▲" : "▼"} {product.change}%
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
