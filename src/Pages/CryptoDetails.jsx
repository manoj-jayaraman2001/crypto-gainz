import { useParams } from "react-router-dom";
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../services/cryptoApi";
import { useState } from "react";
// -----------ICONS-----------------//
import {
  AiFillDollarCircle,
  AiFillThunderbolt,
  AiFillMoneyCollect,
  AiFillCheckCircle,
  AiOutlineStop,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import { FaFileInvoiceDollar, FaTrophy } from "react-icons/fa";
import { RiFundsFill } from "react-icons/ri";
import { GiRank3 } from "react-icons/gi";
import { Select, MenuItem } from "@mui/material";
// ----------------------------------//
import millify from "millify";
import Loading from "../components/Loading";
import FallbackError from "../components/FallbackError";
import "../styles/cryptodetails.css";
import "../styles/home.css";
import StatisticCard from "../components/StatisticCard";
import TableItem from "../components/TableItem";
import LineChart from "../components/LineChart";
import HTMLReactParser from "html-react-parser";
// -----------------------------------------------------------------------------------------//

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data, isFetching, error } = useGetCryptoDetailsQuery(coinId);
  const {
    data: coinHistory,
    isFetching: isHistoryFetching,
    error: HistoryError,
  } = useGetCryptoHistoryQuery({ coinId, timePeriod });

  const coinInfo = data?.data?.coin;
  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];
  const StatsArray = coinInfo ? stats(coinInfo) : [];
  const GenricArray = coinInfo ? genericStats(coinInfo) : [];

  if (!coinInfo) return <Loading />;
  if (!coinHistory) return <Loading />;
  if (error || HistoryError) return <FallbackError />;
  return (
    <div className="details-container">
      <div className="coin-heading">
        <p>{coinInfo?.name}</p>
        <img
          src={coinInfo?.iconUrl}
          alt={coinInfo?.name}
          height={34}
          width={34}
        />
      </div>
      <div
        style={{
          marginLeft: "20px",
          fontSize: 18,
          fontFamily: "Lato, sans-serif",
        }}
      >
        <p>
          An overview showing the statistics of {coinInfo.name}, such as the
          base and quote currency, the rank, and trading volume.
        </p>
      </div>
      <div className="card-grid">
        {StatsArray.map((stat, Index) => (
          <StatisticCard {...stat} key={Index} />
        ))}
      </div>
      <div className="stat-flex-container">
        <div
          className="total-genric-width"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ fontFamily: "Karla, sans-serif" }}>
            <h3>What is {coinInfo?.name}</h3>
            <div style={{ maxWidth: 400 }}>
              {HTMLReactParser(coinInfo.description)}
            </div>
          </div>
          <h3
            style={{
              fontFamily: "Karla, sans-serif",
              alignSelf: "center",
              marginTop: 20,
            }}
          >
            Other Stats Info
          </h3>
          <div className="genric-stats">
            {GenricArray.map((stat, Index) => (
              <TableItem {...stat} key={Index} />
            ))}
          </div>
        </div>
        <div className="line-chart-container">
          <div className="duration-dropdown">
            <Select
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)}
            >
              {time.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div className="line-chart">
            {coinHistory.data ? (
              <LineChart
                coinHistory={coinHistory?.data}
                currentPrice={millify(coinInfo?.price)}
                coinName={coinInfo?.name}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div className="links">
        <h3>{coinInfo?.name} Links</h3>
        <div className="links-table">
          {coinInfo?.links?.map((linkObject) => {
            return (
              <div key={linkObject.url} className="link-row">
                <div>{linkObject.type}</div>
                <div>
                  <a href={linkObject.url}>{linkObject.name}</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CryptoDetails;

// ----------------------------STATS-----------------------------------//

const stats = (coinInfo) => {
  return [
    {
      title: "Price to USD",
      value: `$ ${coinInfo?.price && millify(coinInfo?.price)}`,
      icon: <AiFillDollarCircle className="icon" />,
    },
    {
      title: "Rank",
      value: coinInfo?.rank,
      icon: <GiRank3 className="icon" />,
    },
    {
      title: "24h Volume",
      value: `$ ${coinInfo ? millify(coinInfo[`24hVolume`]) : "-"}`,
      icon: <AiFillThunderbolt className="icon" />,
    },
    {
      title: "Market Cap",
      value: `$ ${coinInfo?.marketCap && millify(coinInfo?.marketCap)}`,
      icon: <FaFileInvoiceDollar className="icon" />,
    },
    {
      title: "All-time-high(daily avg)",
      value: `$ ${
        coinInfo?.allTimeHigh?.price && millify(coinInfo?.allTimeHigh?.price)
      }`,
      icon: <FaTrophy className="icon" />,
    },
  ];
};

const genericStats = (coinInfo) => {
  return [
    {
      title: "Number Of Markets",
      value: coinInfo?.numberOfMarkets,
      icon: <RiFundsFill />,
    },
    {
      title: "Number Of Exchanges",
      value: coinInfo?.numberOfExchanges,
      icon: <AiFillMoneyCollect />,
    },
    {
      title: "Aprroved Supply",
      value: coinInfo?.supply?.confirmed ? (
        <AiFillCheckCircle style={{ color: "green" }} />
      ) : (
        <AiOutlineStop />
      ),
      icon: <AiOutlineExclamationCircle />,
    },
    {
      title: "Total Supply",
      value: `$ ${coinInfo?.supply?.total && millify(coinInfo?.supply?.total)}`,
      icon: <AiOutlineExclamationCircle />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        coinInfo?.supply?.circulating && millify(coinInfo?.supply?.circulating)
      }`,
      icon: <AiOutlineExclamationCircle />,
    },
  ];
};
