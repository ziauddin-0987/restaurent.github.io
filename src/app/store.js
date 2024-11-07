// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/counterSlice";

const store = configureStore({
  reducer: {
    apis: apiSlice,
  },
});
export default store;
