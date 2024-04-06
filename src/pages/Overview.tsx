import { MarketCapChart } from "@/components/modules/overview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { title } from "process";

type OverviewCardData = {
  title: string;
  value?: string;
  content?: React.ReactNode;
  gridSetting: string;
};

const overviewCardData: OverviewCardData[] = [
  {
    title: "Active Validator",
    gridSetting: "xl:col-span-6",
    content: (
      <div className="flex flex-col p-5 gap-4">
        <h1 className="text-neutral-600 text-sm font-medium">
          Active Validator
        </h1>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-neutral-300 text-2xl font-semibold">
            <h3>180 out of 455</h3>
            <h3>33%</h3>
          </div>
          <div className="relative h-3 w-full bg-neutral-800 rounded-full">
            <div className="absolute h-full bg-[#5be49b] rounded-full w-1/3"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Latest Block",
    gridSetting: "xl:col-span-6",
    content: (
      <div className="h-full flex justify-evenly p-5">
        <div className="flex flex-col items-center justify-between h-full gap-5">
          <h1 className="text-neutral-600 text-sm font-medium">Latest Block</h1>
          <h3 className="text-[#5be49b] text-2xl font-semibold">19,323,233</h3>
        </div>
        <div className="flex flex-col items-center justify-between h-full gap-5">
          <h1 className="text-neutral-600 text-sm font-medium">Block Time</h1>
          <h3 className="text-neutral-300 text-2xl font-semibold">19.3s</h3>
        </div>
        <div className="flex flex-col items-center justify-between h-full">
          <h1 className="text-neutral-600 text-sm font-medium">Chain</h1>
          <h3 className="text-neutral-300 text-2xl font-semibold">
            cosmohub-4
          </h3>
        </div>
      </div>
    ),
  },
  {
    title: "Transactions",
    value: "66,202,288",
    gridSetting: "xl:col-span-3",
  },
  {
    title: "Inflation",
    value: "30%",
    gridSetting: "xl:col-span-3",
  },
  {
    title: "Staking APR",
    value: "14.39%",
    gridSetting: "xl:col-span-3",
  },
  {
    title: "Community Pool",
    value: "4.5M",
    gridSetting: "xl:col-span-3",
  },
];

const Overview = () => {
  return (
    <div className="relative z-20 flex flex-1 flex-col gap-2 p-4 md:gap-5">
      <div className="grid gap-4 lg:grid-cols-2 md:gap-5 xl:grid-cols-3">
        <MarketCapChart />
        <Card
          title="Card 1"
          className="rounded-2xl bg-[#0e0e0e] border border-neutral-800"
        />
      </div>
      <div className="grid gap-4 lg:grid-cols-12 md:gap-5">
        {overviewCardData.map((data, idx) => (
          <Card
            key={idx}
            title={data.title}
            className={`${data.gridSetting} bg-[#0e0e0e] border border-neutral-800`}
          >
            {data.value && (
              <>
                <CardHeader className="p-5 text-neutral-600 flex flex-row items-center justify-between space-y-0">
                  <CardTitle className="text-sm font-medium">
                    {data.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0 flex flex-col space-y-2 justify-between">
                  <div className="flex flex-row items-center justify-between">
                    <div className="text-neutral-300 text-2xl font-semibold">
                      {data.value}
                    </div>
                  </div>
                </CardContent>
              </>
            )}
            {data.content && data.content}
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1">
        <Card
          title="Card 1"
          className="xl:col-span-1 h-72 rounded-2xl bg-[#0e0e0e] border border-neutral-800"
        />
      </div>
    </div>
  );
};

export default Overview;
