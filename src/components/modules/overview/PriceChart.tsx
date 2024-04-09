import { PriceChartDataType } from "@/stores/overview.store";
import Chart from "react-apexcharts";

type PriceChartProps = {
  chartData: PriceChartDataType;
};

const PriceChart = ({ chartData }: PriceChartProps) => {
  const config = {
    options: {
      chart: {
        type: "line",
        height: "200px",
        toolbar: {
          show: false,
        },
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },
      colors: ["#5be49b"],
      fill: {
        colors: ["#5be49b"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#5be49b"],
        width: 1,
      },
      tooltip: {
        enabled: true,
        style: {
          fontSize: "12px",
          color: "#262626",
        },
      },
      grid: {
        show: false,
        borderColor: "#525252",
        strokeDashArray: 3,
      },
      xaxis: {
        //   type: "datetime",
        categories: chartData.dates,
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
          color: "#525252",
          height: 1,
          width: "100%",
          offsetX: 0,
          offsetY: 0,
        },
        tooltip: {
          enabled: false,
          marker: {
            show: false,
          },
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
        min: Math.floor(Math.min(...chartData.prices)),
        max: Math.max(...chartData.prices),
      },
    },
  };

  const series = [
    {
      name: "Price",
      data: chartData.prices,
    },
  ];

  return (
    <Chart
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      options={config.options}
      series={series}
      type="area"
      style={{ margin: "-10px -10px -40px -20px", height: "200px" }}
    />
  );
};

export default PriceChart;
