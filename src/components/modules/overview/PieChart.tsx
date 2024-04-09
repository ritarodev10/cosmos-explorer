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
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
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
      style={{ margin: "0 -20px 0 -20px", maxWidth: "250px" }}
    />
  );
};

export default PieChart;
