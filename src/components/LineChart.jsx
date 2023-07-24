import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistory?.history[i].timestamp).toLocaleDateString()
    );
  }
  console.log({ coinPrice, coinTimestamp, coinName });
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
        yAxisID: 'price'
      },
    ],
  };

  const options = {
    scales: {
      yAxis: {
        type: 'linear',
        beginAtZero: true,
      },
    },
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
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
