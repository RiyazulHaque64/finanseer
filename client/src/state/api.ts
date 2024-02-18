import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "main",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => ({
        url: "",
      }),
    }),
  }),
});

export const { useGetDataQuery } = api;
export default api;
