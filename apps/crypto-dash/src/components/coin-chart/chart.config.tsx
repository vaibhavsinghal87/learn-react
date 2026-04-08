export const chartOptions = {
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
        autoskip: true,
      },
    },
    y: {
      ticks: {
        callback: (value) => `$${value.toLocaleString()}`,
      },
    },
  },
};
