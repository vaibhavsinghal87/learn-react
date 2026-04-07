import { useEffect, useState } from "react";
import "./App.css";
import Coin from "./components/coin-card/coin";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  // get crypto data from coingecko api
  const [cryptoData, setCryptoData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const url = `${API_URL}&order=market_cap_desc&per_page=10&page=1&sparkline=false`;
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
  }, []);

  const loadingMessage = "Loading crypto data...";

  return (
    <>
      <section id="center">
        <h1 className="heading">Crypto Dash</h1>
        <div className="controls">
          <button
            className="refresh-btn"
            onClick={() => window.location.reload()}
          >
            Refresh
          </button>
        </div>

        {loading && <p>{loadingMessage}</p>}
        {error && <p>{error}</p>}
        {!loading && !error && (
          <div className="coins-holder">
            {cryptoData.map((crypto) => {
              return <Coin key={crypto.id} coin={crypto} />;
            })}
          </div>
        )}
      </section>
    </>
  );
}

export default App;
