import type { Dispatch, SetStateAction } from "react";
import Limit from "../../components/dropdown/Limit";
import Filter from "../../components/filter/Filter";
import Coin from "../../components/coin-card/Coin";
import type { CryptoCoin, LimitOption } from "../../types/crypto";

interface HomePageProps {
  cryptoData: CryptoCoin[];
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  limit: LimitOption;
  setLimit: Dispatch<SetStateAction<LimitOption>>;
  loading: boolean;
  error: string;
}

function HomePage({
  cryptoData,
  filter,
  setFilter,
  limit,
  setLimit,
  loading,
  error,
}: HomePageProps) {
  const filteredCryptoData = cryptoData.filter(
    (crypto: CryptoCoin) =>
      crypto.name.toLowerCase().includes(filter.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(filter.toLowerCase()),
  );
  const loadingMessage = "Loading crypto data...";

  return (
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
          {filteredCryptoData.map((crypto: CryptoCoin) => {
            return <Coin key={crypto.id} coin={crypto} />;
          })}
        </div>
      )}
    </section>
  );
}

export default HomePage;
