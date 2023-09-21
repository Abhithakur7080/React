const { timerReducer } = require("./redux/reducers/timerReducer");
const { counterReducer } = require("./redux/reducers/counterReducer");

// refactor to use configureStore
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        timerReducer,
        counterReducer
    }
});
