import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://thelibary.vercel.app/api/v1/",
  }),
  tagTypes: ["books", "reviews", "readingList", "wishList"],
  endpoints: () => ({}),
});

// // @ts-ignore
// credentials: "include",
// // @ts-ignore
// prepareHeaders: (headers, { getState }: any) => {
//   const token = getState().auth.token;
//   if (token) {
//     console.log("Token", token);
//     headers.set("authorization", `Bearer ${token}`);
//   }
//   return headers;
// },

// const baseQuery = fetchBaseQuery({
//   baseUrl: "http://localhost:5555/api/v1/",
//   credentials: "include",
//   // @ts-ignore
//   prepareHeaders: (headers, { getState }: any) => {
//     const token = getState().auth.token;
//     if (token) {
//       console.log(token);
//       headers.set("authorization", `Bearer ${token}`);
//     }
//     return headers;
//   },
// });

// const baseQueryWithReAuth = async (args: any, api: any, extraOptions: any) => {
//   let result = await baseQuery(args, api, extraOptions);

//   if (result.error?.status === 403) {
//     console.log("sending refresh token request");
//     const refreshResult = await baseQuery("/auth/refresh", api, extraOptions);
//     if (refreshResult?.data) {
//       console.log("refresh token success");
//       const user = api.getState().auth.user;
//       api.dispatch(setCredentials({ ...refreshResult.data, user }));
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       console.log("refresh token failed");
//       api.dispatch(logOut());
//     }
//   }
// };

// export const api = createApi({
//   reducerPath: "api",
//   // @ts-ignore
//   baseQuery: baseQueryWithReAuth,
//   tagTypes: ["books"],
//   endpoints: () => ({}),
// });

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/ban-ts-comment */
