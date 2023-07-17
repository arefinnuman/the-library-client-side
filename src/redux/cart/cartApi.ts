/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from "../apiSlice";

const cartApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addToReadingList: builder.mutation({
      query: (data) => ({
        url: "/reading-list/create-readingList",
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: ["readingList"],
    }),

    getReadingList: builder.query({
      query: (id) => `/reading-list/${id}`,
      providesTags: ["readingList"],
    }),

    markedAsRead: builder.mutation({
      query: (id) => ({
        url: `/reading-list/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["readingList"],
    }),

    getMarkedAsRead: builder.query({
      query: (id) => `/reading-list/marked-as-read/${id}`,
      providesTags: ["readingList"],
    }),
  }),
});

export const {
  useAddToReadingListMutation,
  useGetReadingListQuery,
  useMarkedAsReadMutation,
  useGetMarkedAsReadQuery,
} = cartApi;
