import millify from "millify";
import { useState } from "react";
import { useGetCryptosQuery } from "../services/createApi";
import { Card, CardContent, Typography, CardActionArea } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "../styles/cryptocurrencies.css";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data, isFetching } = useGetCryptosQuery();
  const cryptoCoins = data?.data?.coins;

  return (
    <div className="crypto-container">
      <div className="coin-grid">
        {cryptoCoins.map((currency, Index) => {
          return (
            <CurrencyCard
              key={Index}
              id={Index + 1}
              name={currency.name}
              imgUrl={currency.iconUrl}
              price={currency.price}
              marketCap={currency.marketCap}
              dailyChange={currency.change}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cryptocurrencies;

// ---------------Child Components---------------//

const CurrencyCard = ({ id, name, imgUrl, price, marketCap, dailyChange }) => {
  const fonts = { Lato: "Lato , sans-serif", Karla: "Karla, sans-serif" };
  return (
    <Card className="root">
      <CardActionArea>
        <CardContent>
          <div className="card-top">
            <Typography sx={{ fontFamily: fonts.Lato, fontWeight: 600 }}>
              {`${id}. ${name}`}
            </Typography>
            <img src={imgUrl} alt={`${name}-logo`} className="icon" />
          </div>

          <div>
            <Typography
              sx={{
                fontFamily: fonts.Karla,
                fontSize: "2em",
                color: "#FF630B",
              }}
            >
              {millify(price)}
            </Typography>

            <div className="info">
              <Typography sx={{ fontFamily: fonts.Karla, fontSize: "1em" }}>
                Market Cap:
              </Typography>
              <Typography sx={{ fontFamily: fonts.Karla, fontSize: "1em" }}>
                {millify(marketCap)}
              </Typography>
            </div>
            <div className="info">
              <Typography sx={{ fontFamily: fonts.Karla, fontSize: "1em" }}>
                Daily Change:
              </Typography>
              <Typography
                style={{ color: dailyChange > 0 ? "green" : "red" }}
                sx={{
                  fontFamily: fonts.Karla,
                  fontWeight: 600,
                  fontSize: "1em",
                }}
              >
                {dailyChange}%
              </Typography>
              {dailyChange > 0 ? (
                <ArrowDropUpIcon sx={{ color: "green", fontSize: 30 }} />
              ) : (
                <ArrowDropDownIcon sx={{ color: "red", fontSize: "2em" }} />
              )}
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
