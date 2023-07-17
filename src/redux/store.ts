import { configureStore } from "@reduxjs/toolkit";
import { api } from "./apiSlice";
import authReducer from "./auth/authSlice";
import bookReducer from "./books/bookSlice";

const store = configureStore({
  reducer: {
    book: bookReducer,
    auth: authReducer,

    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
