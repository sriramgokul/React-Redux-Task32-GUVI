import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./slices/createSlice";

export const store = configureStore({
    devTools: true,
    reducer: cardReducer
})