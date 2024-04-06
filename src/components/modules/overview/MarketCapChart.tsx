import { Card } from "@/components/ui/card";
import React from "react";

const MarketCapChart = () => {
  return (
    <Card
      title="Market Cap Chart"
      className="xl:col-span-2 h-48 rounded-2xl bg-[#0e0e0e] border border-neutral-800"
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <div className="grid gap-4 lg:grid-cols-2">
        <div>Number</div>
        <div>Chart</div>
      </div>
      ;
    </Card>
  );
};

export default MarketCapChart;
