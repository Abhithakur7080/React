import { todoReducer } from "./redux/reducers/todoReducers";
import { notesReducer } from "./redux/reducers/noteReducers";
import { notificationReducer } from "./redux/reducers/notificationReducer";
import { loggerMiddleware } from "./redux/middlewares/loggerMiddleware";

//redux toolkit
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        todoReducer,
        notesReducer,
        notificationReducer
    },
    middleware: [...getDefaultMiddleware(), loggerMiddleware]
});