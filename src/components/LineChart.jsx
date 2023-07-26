import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const coinPriceList = [];
  const timeStamps = [];

  coinHistory?.history?.forEach((historyObject) => {
    if (historyObject.price) {
      coinPriceList.unshift(Number(historyObject.price));
      timeStamps.unshift(
        new Date(historyObject.timestamp * 1000).toLocaleDateString()
      );
    }
  });
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };
  const data = {
    labels: timeStamps,
    datasets: [
      {
        label: `${coinName} Price in USD`,
        data: coinPriceList,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "blue",
        borderWidth: 1,
        pointRadius: 0,
      },
    ],
  };

  return (
    <>
      <div className="chart-header">
        <h3 level={2} className="chart-h3">
          {coinName} Price Chart{" "}
        </h3>
        <div className="price-container">
          <h3 level={5} className="price-change">
            Change: {coinHistory?.data?.change}%
          </h3>
          <h3 level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </h3>
        </div>
      </div>
      {coinPriceList && <Line data={data} options={options} />}
    </>
  );
};

export default LineChart;
