import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";

import Header from "./components/header/Header";
import About from "./pages/about/About";
import CoinDetailsPage from "./pages/coin-details/coin-details";
import Home from "./pages/home/Home";
import type { CryptoCoin, LimitOption } from "./types/crypto";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  // get crypto data from coingecko api
  const [cryptoData, setCryptoData] = useState<CryptoCoin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [limit, setLimit] = useState<LimitOption>("10");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchCryptoData = async () => {
      setLoading(true);
      setError("");
      try {
        const url = `${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch crypto data");
        }
        const data: CryptoCoin[] = await response.json();
        setCryptoData(data);
      } catch (error) {
        // set error state
        setError(
          error instanceof Error ? error.message : "Failed to fetch crypto data",
        );
      } finally {
        // set loading to false
        setLoading(false);
      }
    };
    fetchCryptoData();
  }, [limit]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cryptoData={cryptoData}
              filter={filter}
              setFilter={setFilter}
              limit={limit}
              setLimit={setLimit}
              loading={loading}
              error={error}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/coin/:id" element={<CoinDetailsPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
