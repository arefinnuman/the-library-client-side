import { api } from "../apiSlice";

const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
  }),
});

export const { useGetBooksQuery } = booksApi;