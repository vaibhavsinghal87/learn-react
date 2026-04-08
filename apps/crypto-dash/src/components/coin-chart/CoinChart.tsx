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
import type { CoinChartData, CoinChartResponse } from "../../types/crypto";

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

interface CoinChartProps {
  coinId: string;
}

function CoinChart({ coinId }: CoinChartProps) {
  const [chartData, setChartData] = useState<CoinChartData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchChartData = async () => {
      setLoading(true);
      setError("");
      try {
        const url = `${API_URL}${coinId}/market_chart?vs_currency=usd&days=7`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch chart data");
        }
        const data: CoinChartResponse = await response.json();
        const prices = data.prices.map((price: [number, number]) => ({
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
        setError(
          error instanceof Error ? error.message : "Failed to fetch chart data",
        );
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
        <div>
          <Line data={chartData} options={{ ...chartOptions }} />
        </div>
      )}
    </div>
  );
}

export default CoinChart;
