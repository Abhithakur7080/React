// import * as redux from "redux";
import { createStore, combineReducers } from "redux";

import todoReducer from "./redux/reducers/todoReducers";
import notesReducer from "./redux/reducers/noteReducers";


//single reducer
// export const store = redux.createStore(todoReducer);
// export const store = createStore(todoReducer);

//combined reducer
const result = combineReducers({
    todoReducer,
    notesReducer
});
export const store = createStore(result);