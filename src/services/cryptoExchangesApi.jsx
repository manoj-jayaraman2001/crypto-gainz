import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = import.meta.env.VITE_COIN_GECKO_API_URL;

const createRequest = (url) => ({
  url,
  headers: {
    'Content-Type': 'application/json', // Set the "Content-Type" header to "application/json"
  },
});

export const cryptoExchangesApi = createApi({
  reducerPath: 'cryptoExchangesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoExchanges: builder.query({
      query: () => createRequest(`/exchanges`),
    }),
  }),
});

export const { useGetCryptoExchangesQuery } = cryptoExchangesApi;
