export type PriceDirection = "up" | "down" | "flat";

export interface ProductChange {
  dir: PriceDirection;
  pct: number;
}

export interface MarketPrice {
  market: string;
  division: string;
  min: number;
  max: number;
}

export interface Product {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: ProductChange;
  markets: MarketPrice[];
}

export interface ProductPriceSummary {
  min: number;
  max: number;
  average: number;
}
