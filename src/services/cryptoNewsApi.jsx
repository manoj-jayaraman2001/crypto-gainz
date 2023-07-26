// https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsApiHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
  "X-RapidAPI-Host": import.meta.env.VITE_CRYPTO_NEWS_API_HOST
};

const baseUrl = import.meta.env.VITE_CRYPTO_NEWS_API_URL;

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
