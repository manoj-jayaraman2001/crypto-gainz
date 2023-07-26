import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = import.meta.env.VITE_CRYPTO_EXCHANGE_API_URL

const createRequest = (url) => (url)

export const cryptoExchangesApi = createApi({
    reducerPath: 'cryptoExchangesApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoExchanges: builder.query({
            query: (count) => createRequest(`/exchanges`)
        }),
    })
})


export const {useGetCryptoExchangesQuery} = cryptoExchangesApi