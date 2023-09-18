import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from './apiSliceBlog';

export const storeRtk = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})