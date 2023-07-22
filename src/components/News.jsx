import { useState } from "react";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import ClickableNewsCard from "./ClickableNewsCard";
import Loading from "./Loading";
import '../styles/news.css'


const News = ({ simplified }) => {
  const [newsCatogery, setCategory] = useState("Cryptocurrency");
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
    Category: newsCatogery,
    count: simplified ? 6 : 14,
  });
  if (!cryptoNews?.value) return <Loading />;
  return (
    <div className="news-grid">
      {cryptoNews?.value.map((newsObject, Index) => {
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
  );
};

export default News;

