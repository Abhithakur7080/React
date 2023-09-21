// remove the counter action creators imports
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { count: 0 };

// refactor to use the createSlice method

const counterSlice = createSlice({
  name: "counter",
  initialState: INITIAL_STATE,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    }
  }
})

// export the counter reducer function and action creators here

export const counterReducer = counterSlice.reducer;

export const { increment, decrement, reset } = counterSlice.actions;

export const counterSelector = (state) => state.counterReducer;
