import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CoinChart from "../../components/coin-chart/CoinChart";

const API_URL = import.meta.env.VITE_COIN_DETAILS_URL;

function CoinDetailsPage() {
  const { id } = useParams();
  const [coinDetails, setCoinDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // fetch coin details using id
    const fetchCoinDetails = async () => {
      try {
        const url = `${API_URL}${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setCoinDetails(data);
      } catch (error: string | any) {
        // set error state
        setError(error);
      } finally {
        // set loading to false
        setLoading(false);
      }
    };
    fetchCoinDetails();
    console.log("Fetching details for coin with id:", id);
  }, [id]);

  return (
    <>
      <h1>Coin Details Page</h1>
      {loading && <p>Loading coin details...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && coinDetails && (
        <div>
          <h2>
            {coinDetails.name} ({coinDetails.symbol})
          </h2>
          <img src={coinDetails.image.large} alt={coinDetails.name} />
          <p>{coinDetails.description.en.split(". ")[0]}</p>
          <p>Current Price: ${coinDetails.market_data.current_price.usd}</p>
          <p>Market Cap: ${coinDetails.market_data.market_cap.usd}</p>
          <p
            className={
              coinDetails.market_data.price_change_percentage_24h >= 0
                ? "positive"
                : "negative"
            }
          >
            24h Change:{" "}
            {coinDetails.market_data.price_change_percentage_24h.toFixed(2)}%
          </p>
          <CoinChart coinId={id} />
        </div>
      )}
    </>
  );
}

export default CoinDetailsPage;
