import { useGetCryptoExchangesQuery } from "../services/cryptoExchangesApi";
import Loading from "../components/Loading";
import FallbackError from "../components/FallBackError";
import ExchangeComponent from "../components/ExhangeComponent";
import millify from "millify";
import { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import "../styles/exchanges.css";
import Cookies from "js-cookie";
const Exchanges = () => {
  const { data: exchanges, isFetching, error } = useGetCryptoExchangesQuery();

  useEffect(() => {
    // Set the cookie with SameSite=None and Secure attributes
    Cookies.set("cookie1", "value1", { sameSite: "Lax" });
    Cookies.set("cookie2", "value2", { sameSite: "None", secure: true });
  }, []);

  if (!exchanges) return <Loading />;
  if (error) return <FallbackError />;
  return (
    <div>
      <div className="heading">
        <ExchangeComponent
          name={"Exchange Name"}
          icon={""}
          tradeVolume={"24h Volume(btc)"}
          trustScore={"Trust score"}
          trustRank={"Rank"}
          description={""}
          url={""}
          bold={true}
          isDisabled = {true}
        />
      </div>
      <div className="exchanges-data">
        {exchanges ? (
          exchanges.map((exchangeObject) => {
            return (
              <ExchangeComponent
                key={exchangeObject.id}
                name={exchangeObject.name}
                icon={exchangeObject.image}
                tradeVolume={millify(exchangeObject.trade_volume_24h_btc)}
                trustScore={exchangeObject.trust_score}
                trustRank={exchangeObject.trust_score_rank}
                description={exchangeObject.description}
                url={exchangeObject.url}
                bold={false}
                isDisabled = {false}
              />
            );
          })
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Exchanges;
