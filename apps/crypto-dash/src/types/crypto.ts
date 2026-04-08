import type { ChartData } from "chart.js";

export type LimitOption = "5" | "10" | "20" | "50" | "100";

export interface CryptoCoin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
}

export interface CoinDetails {
  id: string;
  name: string;
  symbol: string;
  image: {
    large: string;
  };
  description: {
    en: string;
  };
  market_data: {
    current_price: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
    price_change_percentage_24h: number;
  };
}

export interface CoinChartResponse {
  prices: [number, number][];
}

export type CoinChartData = ChartData<"line", { x: number; y: number }[]>;
