import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  TimeScale,
  Tooltip,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { chartOptions } from "./chart.config";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale,
);

const API_URL = import.meta.env.VITE_COIN_DETAILS_URL;

function CoinChart({ coinId }) {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const url = `${API_URL}${coinId}/market_chart?vs_currency=usd&days=7`;
        const response = await fetch(url);
        const data = await response.json();
        const prices = data.prices.map((price) => ({
          x: price[0],
          y: price[1],
        }));
        setChartData({
          datasets: [
            {
              label: "Price (USD)",
              data: prices,
              fill: true,
              borderColor: "#007bff",
              backgroundColor: "rgba(0, 123, 255,0.1)",
              pointRadius: 0,
              tension: 0.3,
            },
          ],
        });
      } catch (error) {
        setError("Failed to fetch chart data");
        console.error("Error fetching chart data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchChartData();
  }, [coinId]);

  return (
    <div className="chart">
      {loading && <p>Loading chart data...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && chartData && (
        <p>
          <Line data={chartData} options={{ ...chartOptions }} />
        </p>
      )}
    </div>
  );
}

export default CoinChart;
