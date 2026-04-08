import type { ChartOptions } from "chart.js";

export const chartOptions: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: { mode: "index", intersect: false },
  },
  scales: {
    x: {
      type: "time",
      time: {
        unit: "day",
      },
      ticks: {
        autoSkip: true,
      },
    },
    y: {
      ticks: {
        callback: function (value: string | number) {
          const numericValue =
            typeof value === "number" ? value : Number.parseFloat(value);

          return Number.isNaN(numericValue)
            ? `${value}`
            : `$${numericValue.toLocaleString()}`;
        },
      },
    },
  },
};
