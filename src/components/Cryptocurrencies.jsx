import { useState, useEffect } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import CurrencyCard from "./CurrencyCard";
import SearchField from "./SearchField";
import NoResultsFound from "./NoResults";
import "../styles/cryptocurrencies.css";
import Loading from "./Loading";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data, isFetching } = useGetCryptosQuery(count);
  const [cryptoCoins, setcryptoCoins] = useState(data?.data?.coins);
  const [searchCoin, setSearchCoin] = useState("");

  useEffect(() => {
    const filteredResults = data?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchCoin.toLowerCase())
    );
    setcryptoCoins(filteredResults);
  }, [data, searchCoin]);

  const NoResultComponent = () => {
    if (isFetching) return <Loading />;
    if (cryptoCoins?.length === 0) return <NoResultsFound />;
    return <Loading />;
  };

  return (
    <div className="crypto-container">
      {!simplified && (
        <div className="search-box">
          <SearchField
            onChange={(value) => {
              setSearchCoin(value);
            }}
          />
        </div>
      )}
      {cryptoCoins?.length > 0 ? (
        <div className="coin-grid">
          {cryptoCoins?.map((currency) => {
            return (
              <CurrencyCard
                key={currency.uuid}
                id={currency.rank}
                name={currency.name}
                imgUrl={currency.iconUrl}
                price={currency.price}
                marketCap={currency.marketCap}
                dailyChange={currency.change}
              />
            );
          })}
        </div>
      ) : (
        <div className="no-result">
          <NoResultComponent />
        </div>
      )}
    </div>
  );
};

export default Cryptocurrencies;
