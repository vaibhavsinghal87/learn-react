import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";

import Header from "./components/header/Header";
import About from "./pages/about/About";
import CoinDetailsPage from "./pages/coin-details/coin-details";
import Home from "./pages/home/Home";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  // get crypto data from coingecko api
  const [cryptoData, setCryptoData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [limit, setLimit] = useState("10");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const url = `${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`;
        const response = await fetch(url);
        const data = await response.json();
        setCryptoData(data);
      } catch (error: string | any) {
        // set error state
        setError(error);
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
