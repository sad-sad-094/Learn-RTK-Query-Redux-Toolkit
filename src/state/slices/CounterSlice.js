/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 10
  },
  reducers: {
    increment: (state) => {
      state.counter += 1
    },
    decrement: (state) => {
      state.counter -= 1
    },
    incrementBy: (state, action) => {
      state.counter += action.payload
    },
    decrementBy: (state, action) => {
      state.counter -= action.payload
    },
  }
})

export const { increment, decrement, incrementBy, decrementBy } = counterSlice.actions;

export default counterSlice.reducer;

