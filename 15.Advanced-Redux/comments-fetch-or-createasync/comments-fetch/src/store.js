import { configureStore } from "@reduxjs/toolkit";

// import comments reducer function here and include it inside of the store
import { commentsReducer } from "./redux/reducers/commentsReducer";
export const store = configureStore({
  reducer: {
    commentsReducer
  },
});
