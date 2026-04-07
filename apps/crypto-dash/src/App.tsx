import { useEffect, useState } from "react";
import "./App.css";
import Coin from "./components/coin-card/Coin";
import Limit from "./components/dropdown/Limit";
import Filter from "./components/filter/Filter";

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

  const loadingMessage = "Loading crypto data...";
  const filteredCryptoData = cryptoData.filter(
    (crypto) =>
      crypto.name.toLowerCase().includes(filter.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <>
      <section id="center">
        <h1 className="heading">Crypto Dash</h1>
        <div className="control-panel">
          <Filter filter={filter} onFilterChange={setFilter} />
          <Limit limit={limit} onLimitChange={setLimit} />
        </div>

        {loading && <p>{loadingMessage}</p>}
        {error && <p>{error}</p>}
        {!loading && !error && (
          <div className="coins-holder">
            {filteredCryptoData.map((crypto) => {
              return <Coin key={crypto.id} coin={crypto} />;
            })}
          </div>
        )}
      </section>
    </>
  );
}

export default App;
