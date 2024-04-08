import Chart from "react-apexcharts";

type PieChartProps = {
  bonded: number;
  supply: number;
};

const PieChart = ({ bonded, supply }: PieChartProps) => {
  const config = {
    series: [bonded, supply],
    options: {
      chart: {
        type: "pie",
        width: "100%",
      },
      fill: {
        colors: ["#54B882", "#0C1D1D"],
      },
      labels: ["Bonded", "Supply"],

      dataLabels: {
        formatter(val, opts) {
          const name = opts.w.globals.labels[opts.seriesIndex];
          return [name, val.toFixed(1) + "%"];
        },
      },
      legend: {
        show: false,
      },
    },
  };

  return (
    <Chart
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      options={config.options}
      series={config.series}
      type="pie"
      style={{ marginRight: "-20px", width: "100%" }}
    />
  );
};

export default PieChart;
