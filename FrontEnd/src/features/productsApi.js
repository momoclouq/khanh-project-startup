import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/admin/"}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => 'courses',
        }),
        
    }),
});

export const { useGetAllProductsQuery } = productsApi;