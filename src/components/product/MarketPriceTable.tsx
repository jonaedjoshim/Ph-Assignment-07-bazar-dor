import type { MarketPrice } from "@/types/product";
import { getMarketAverage } from "@/lib/api/products";
import { formatPrice } from "@/lib/formatters";

interface MarketPriceTableProps {
  markets: MarketPrice[];
}

export default function MarketPriceTable({ markets }: MarketPriceTableProps) {
  return (
    <section>
      <h2 className="mb-4 text-lg font-bold text-foreground">
        বাজারভিত্তিক আজকের দাম
      </h2>

      <div className="overflow-hidden rounded-2xl border border-border">
        <div className="overflow-x-auto">
          <table className="table w-full bg-white text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-muted text-muted">
                <th className="min-w-40 px-4 py-4 font-semibold">বাজার</th>
                <th className="min-w-27.5 px-4 py-4 font-semibold">বিভাগ</th>
                <th className="min-w-27.5 px-4 py-4 text-right font-semibold">
                  সর্বনিম্ন
                </th>
                <th className="min-w-27.5 px-4 py-4 text-right font-semibold">
                  সর্বাধিক
                </th>
                <th className="min-w-27.5 px-4 py-4 text-right font-semibold">
                  গড়
                </th>
              </tr>
            </thead>

            <tbody>
              {markets.map((market, index) => (
                <tr
                  key={`${market.market}-${index}`}
                  className="border-b border-border last:border-b-0 hover:bg-surface-muted"
                >
                  <td className="px-4 py-3 font-medium text-foreground">
                    {market.market}
                  </td>

                  <td className="px-4 py-3 text-muted">{market.division}</td>

                  <td className="px-4 py-3 text-right">
                    {formatPrice(market.min)}
                  </td>

                  <td className="px-4 py-3 text-right">
                    {formatPrice(market.max)}
                  </td>

                  <td className="px-4 py-3 text-right font-semibold text-foreground">
                    {formatPrice(getMarketAverage(market.min, market.max))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
