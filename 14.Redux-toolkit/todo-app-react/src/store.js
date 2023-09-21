import { todoReducer } from "./redux/reducers/todoReducers";
import { notesReducer } from "./redux/reducers/noteReducers";
import { notificationReducer } from "./redux/reducers/notificationReducer";

//redux toolkit
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        todoReducer,
        notesReducer,
        notificationReducer
    }
});