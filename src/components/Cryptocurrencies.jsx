import millify from "millify";
import { useState, useEffect } from "react";
import { useGetCryptosQuery } from "../services/createApi";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  InputAdornment,
  TextField,
} from "@mui/material";
import { ArrowDropUp, ArrowDropDown, Search } from "@mui/icons-material";
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

  ;

  const NoResultComponent = ()=>{
    if (isFetching) return <Loading />
    if (cryptoCoins?.length === 0) return <NoResultsFound/>
    return (<Loading />)
  }

  return (
    <div className="crypto-container">
      {!simplified && (
        <div className="search-box">
          <SearchField onChange={(value) => {setSearchCoin(value);}}/>
        </div>
      )}
      {cryptoCoins?.length > 0 ? (
        <div className="coin-grid">
        {cryptoCoins?.map((currency, Index) => {
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
      ) : (<div className="no-result"><NoResultComponent/></div>)}
      
    </div>
  );
};

export default Cryptocurrencies;

// ---------------Child Components---------------//

// Card Component
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
                <ArrowDropUp sx={{ color: "green", fontSize: 30 }} />
              ) : (
                <ArrowDropDown sx={{ color: "red", fontSize: "2em" }} />
              )}
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

// search field from MUI
const SearchField = ({ onChange }) => {
  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <TextField
      sx={{ background: "white" }}
      variant="outlined"
      fullWidth
      placeholder="Search Cryptocurrencies"
      autoFocus
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search sx={{ color: "#24252D" }} />
          </InputAdornment>
        ),
      }}
      onChange={handleChange}
      size="small"
    />
  );
};
