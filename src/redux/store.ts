import { configureStore } from "@reduxjs/toolkit";
import { api } from "./apiSlice";
import bookReducer from "./books/bookSlice";

const store = configureStore({
  reducer: {
    book: bookReducer,

    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
