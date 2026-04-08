import { Link } from "react-router";
import "./Coin.css";
import type { CryptoCoin } from "../../types/crypto";

interface CoinProps {
  coin: CryptoCoin;
}

function Coin({ coin }: CoinProps) {
  return (
    <Link to={`/coin/${coin.id}`} className="coin-link">
      <div className="coin" key={coin.id}>
        <img src={coin.image} alt={coin.name} />
        <h2>
          {coin.name} ({coin.symbol})
        </h2>
        <p>Current Price: ${coin.current_price}</p>
        <p>Market Cap: ${coin.market_cap}</p>
        <p
          className={
            coin.price_change_percentage_24h >= 0 ? "positive" : "negative"
          }
        >
          24h Change: {coin.price_change_percentage_24h.toFixed(2)}%
        </p>
      </div>
    </Link>
  );
}
export default Coin;
