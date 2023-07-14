/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { api } from "../apiSlice";

const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),

    getReviews: builder.query({
      query: (id) => `/reviews/${id}`,
    }),
  }),
});

export const { useGetBooksQuery, useSingleBookQuery, useGetReviewsQuery } =
  booksApi;
