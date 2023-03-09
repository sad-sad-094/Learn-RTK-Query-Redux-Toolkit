/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./slices/CounterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})