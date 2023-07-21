import "../styles/loading.css";

const Loading = () => {
  return (
    <div>
      <div className="loader-ring">
        <div className="loader-ring-track">
          <div className="loader-ring-light"></div> 
        </div>
      </div>
    </div>
  );
};

export default Loading;
