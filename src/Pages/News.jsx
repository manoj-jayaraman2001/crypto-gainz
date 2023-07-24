import { useState, useEffect } from "react";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import ClickableNewsCard from "../components/ClickableNewsCard";
import SelectNewsCategory from "../components/SelectNewsCategory";
import Loading from "../components/Loading";
import "../styles/news.css";
import FallbackError from "../components/FallBackError";

const News = ({ simplified }) => {
  const [newsCatogery, setCategory] = useState("Cryptocurrency");
  const {
    data: cryptoNews,
    isFetching,
    error,
  } = useGetCryptoNewsQuery({
    Category: newsCatogery,
    count: simplified ? 6 : 14,
  });

  const NoResultComponent = () => {
    if (!cryptoNews?.value && !error) return <Loading />;
    if (isFetching && cryptoNews.value) return <Loading />;
    if (error) return <FallbackError />;
    return <></>;
  };

  return (
    <div>
      <NoResultComponent />
      <div className="category-dropdown">
        <h3>Browse News By Category:</h3>
        {!simplified ? (
          <SelectNewsCategory
            newsCatogery={newsCatogery}
            setCategory={setCategory}
          />
        ) : (
          <></>
        )}
      </div>
      <div className="news-grid">
        {!isFetching &&
          cryptoNews?.value.map((newsObject, Index) => {
            return (
              <ClickableNewsCard
                key={Index}
                newsUrl={newsObject.url}
                newsTitle={newsObject.name}
                imageUrl={newsObject.image?.thumbnail?.contentUrl}
                newsDescription={newsObject.description}
                newsProviderIconUrl={
                  newsObject.provider[0]?.image?.thumbnail?.contentUrl
                }
                newsProviderName={newsObject.provider[0]?.name}
                datePublished={newsObject.datePublished}
              />
            );
          })}
      </div>
    </div>
  );
};

export default News;
