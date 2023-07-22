// https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsApiHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "9bb97666e3mshbbf4dec2c4fd237p1cb8bdjsn47d4405ac764",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({Category,count}) => createRequest(`/news/search?q=${Category}&count=${count}&freshness=Day&textFormat=Raw&safeSearch=Off`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
