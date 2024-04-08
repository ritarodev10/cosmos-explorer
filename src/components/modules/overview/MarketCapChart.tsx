import { ArrowUpIcon, CosmosAtomIcon } from "@/components/icons";
import { Card } from "@/components/ui/card";
import LineGraph from "@/components/ui/line-graph";
import { useOverviewQuery } from "@/hooks/useOverview";
import { formatCurrency, formatNumber } from "@/utils/common.utils";

const MarketCapChart = () => {
  const { priceChart, price, loadingPrice } = useOverviewQuery();

  const { marketCap, priceChange24, latestPrice, volume24 } = price;

  return (
    <Card className="card xl:col-span-2 rounded-2xl bg-[#0e0e0e] border border-accent p-5">
      {!loadingPrice ? (
        <div className="grid lg:grid-cols-2">
          <div className="w-full flex flex-col gap-2 pt-3">
            <div className="w-full flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <CosmosAtomIcon className="h-10 w-10" />
                <h1 className="text-foreground text-2xl font-semibold">ATOM</h1>
              </div>
              <h1 className="text-primary text-2xl font-semibold">
                ${latestPrice}
              </h1>
            </div>
            <div className="w-full flex justify-end">
              <div className="flex gap-2 items-center">
                {priceChange24 !== 0 && (
                  <ArrowUpIcon
                    className={`${
                      priceChange24 > 0
                        ? "text-primary"
                        : "text-red-800 rotate-180"
                    } h-5 w-5`}
                  />
                )}
                <h1 className="text-foreground text-md">
                  {formatNumber(priceChange24, 2)}% (24h)
                </h1>
              </div>
            </div>
            <div className="w-full flex justify-between items-center text-foreground text-sm">
              <h1>Market Cap</h1>
              <h1>{formatCurrency(marketCap, 0)}</h1>
            </div>
            <div className="w-full flex justify-between items-center text-foreground text-sm">
              <h1>24h volume</h1>
              <h1>{formatCurrency(volume24, 0)}</h1>
            </div>
          </div>
          <div className="">
            <LineGraph chartData={priceChart} />
          </div>
        </div>
      ) : (
        <Skeleton />
      )}
    </Card>
  );
};

export default MarketCapChart;

const Skeleton = () => {
  return (
    <div className="w-full flex flex-col gap-2 py-2">
      <div className="w-40 h-5 bg-accent rounded-md animate-pulse"></div>
      <div className="w-full h-20 bg-accent rounded-md animate-pulse"></div>
    </div>
  );
};
