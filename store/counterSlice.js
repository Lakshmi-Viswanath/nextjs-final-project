import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "Counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;

/* Simplifies Redux Code: It reduces the boilerplate code you need to write, such as manually creating action types and action creators and for better organization */