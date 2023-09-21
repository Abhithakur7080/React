// remove the timer action creators imports
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { isRunning: false, elapsedTime: 0 };

// refactor to use the createSlice method
const timerSlice = createSlice({
  name: "timer",
  initialState: INITIAL_STATE,
  reducers: {
    start: (state) => {
      state.isRunning = true
    },
    pause: (state) => {
      state.isRunning = false
    },
    reset: (state) => {
      state.isRunning = false,
      state.elapsedTime = 0
    },
    increment: (state) => {
      state.elapsedTime += 1
    }
  }
});

// export the timer reducer function and action creators here

export const timerReducer = timerSlice.reducer;

// export const actions = timerSlice.actions;
export const { start, pause, reset, increment } = timerSlice.actions;

export const timerSelector = (state) => state.timerReducer;