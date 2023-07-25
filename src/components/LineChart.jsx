

const LineChart = ({ coinHistory, currentPrice, coinName }) => {

    
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
      {/* {labels && coinPrice && <Line data={data} options={options} />} */}
    </>
  );
};

export default LineChart;
