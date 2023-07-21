import { Paper, Grid, Typography } from "@mui/material";
import { Icon } from "@mui/material";
import "../styles/home.css";
import { useGetCryptosQuery } from "../services/createApi";
import {BsGraphUpArrow, BsCurrencyExchange} from 'react-icons/bs'
import { Link } from "react-router-dom";
import {Tb24Hours} from 'react-icons/tb'
import {GiWorld, GiMoneyStack} from 'react-icons/gi'
import millify from "millify";
import {Cryptocurrencies, News} from "../components";

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats

  if (isFetching) return 'Loading ...'
  return (
    <div className="home-container">
      <h2>Global Crypto Stats</h2>
      <div className="card-grid">
        <StatisticCard title="Total Sales" value={globalStats.total} icon={<BsGraphUpArrow className="icon"/>} />
        <StatisticCard title="Total Exchanges" value={globalStats.totalExchanges} icon={<BsCurrencyExchange className="icon" />} />
        <StatisticCard title="Total Market Cap ($)" value={millify(globalStats.totalMarketCap)} icon={<GiMoneyStack className="icon"/>} />
        <StatisticCard title="Total 24h Volume ($)" value={millify(globalStats.total24hVolume)} icon={<Tb24Hours className="icon"/>} />
        <StatisticCard title="Total Markets" value={globalStats.totalMarkets} icon={<GiWorld className="icon"/>} />
      </div>
      <div className="home-heading-container">
        <h3>Top 10 Crypto Currencies in the world</h3>
        <Link to='/cryptocurrencies'>View More</Link>
      </div>
      <Cryptocurrencies simplified/>
      <div className="home-heading-container">
        <h3>Latest Crypto News</h3>
        <Link to='/news'>View More</Link>
      </div>
      <News simplified/>
    </div>
  );
};

export default Home;

//--------------- Child Components------------//

const StatisticCard = ({ title, value, icon }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2, minWidth: 150, maxWidth: 350 }}>
      <Grid container alignItems="center" spacing={2}>
        <Grid item>
          {icon}
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1" fontFamily={"Karla"}>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={7} textAlign="right">
          <Typography variant="h5" fontWeight="bold" fontFamily={"Lato"}>
            {value}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};
