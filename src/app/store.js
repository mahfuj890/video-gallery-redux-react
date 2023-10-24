import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    //get apiSlice name
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  //for some reason need middleware to automatic task
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
