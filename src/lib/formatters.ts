import type { PriceDirection, Product } from "@/types/product";

const bengaliNumberFormatter = new Intl.NumberFormat("bn-BD", {
  maximumFractionDigits: 2,
});

const bengaliPercentageFormatter = new Intl.NumberFormat("bn-BD", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

const unitLabels: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  liter: "লিটার",
  l: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
  pcs: "পিস",
};

export function formatBanglaNumber(value: number): string {
  return bengaliNumberFormatter.format(value);
}

export function formatPrice(price: number): string {
  return `${formatBanglaNumber(price)} টাকা`;
}

export function formatPercentage(percentage: number): string {
  return `${bengaliPercentageFormatter.format(Math.abs(percentage))}%`;
}

export function formatUnit(unit: string): string {
  return unitLabels[unit.toLowerCase()] || unit;
}

export function formatProductUnit(unit: string): string {
  return `প্রতি ${formatUnit(unit)}`;
}

export function formatPriceWithUnit(price: number, unit: string): string {
  return `${formatPrice(price)}/${formatUnit(unit)}`;
}

export function getChangeSymbol(direction: PriceDirection): string {
  if (direction === "up") return "▲";
  if (direction === "down") return "▼";

  return "—";
}

export function getChangeColor(direction: PriceDirection): string {
  if (direction === "up") return "text-danger";
  if (direction === "down") return "text-success";

  return "text-muted";
}

export function formatPriceChange(
  direction: PriceDirection,
  percentage: number,
): string {
  return `${getChangeSymbol(direction)} ${formatPercentage(percentage)}`;
}

export function getProductDescription(product: Product): string {
  const difference = product.today - product.yesterday;

  if (difference > 0) {
    return `গতকালের তুলনায় আজ দাম বেড়েছে ${formatPrice(difference)}`;
  }

  if (difference < 0) {
    return `গতকালের তুলনায় আজ দাম কমেছে ${formatPrice(Math.abs(difference))}`;
  }

  return "গতকালের তুলনায় আজ দাম অপরিবর্তিত রয়েছে";
}

export function parseNumericValue(value: number | string): number {
  if (typeof value === "number") {
    return value;
  }

  const bengaliDigits = "০১২৩৪৫৬৭৮৯";

  const normalized = value
    .replace(/[০-৯]/g, (digit) => String(bengaliDigits.indexOf(digit)))
    .replace(/[,\u09E6-\u09EF]/g, "")
    .replace(/[^0-9.-]/g, "");

  const result = Number.parseFloat(normalized);

  return Number.isFinite(result) ? result : 0;
}
