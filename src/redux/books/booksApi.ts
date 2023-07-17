/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
      providesTags: ["reviews"],
    }),

    postReview: builder.mutation({
      query: (data) => ({
        url: "/reviews/create-review",
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: ["reviews"],
    }),

    postBook: builder.mutation({
      query: (data) => ({
        url: "/books/create-book",
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  useGetReviewsQuery,
  usePostBookMutation,
  usePostReviewMutation,
} = booksApi;
