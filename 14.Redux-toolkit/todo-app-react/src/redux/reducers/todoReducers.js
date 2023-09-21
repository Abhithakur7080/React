import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos:[
        {
            text: "study at 6'O clock",
            completed: true
        },
        {
            text: "office at 9'O clock",
            completed: false
        }
    ]
}

//creating Reducer using Reducer Toolkit

const todoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        //add-action
        add: (state, action)=> {
            state.todos.push({
                text: action.payload,
                completed: false
            })
        },
        //toggle action -> completed or pending
        toggle: (state, action) => {
            state.todos.map((todo, i) => {
                if(i===action.payload){
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        }
    }
});

export const todoReducer = todoSlice.reducer;

export const actions = todoSlice.actions;

// selecter
export const todoSelector = (state) => state.todoReducer.todos;