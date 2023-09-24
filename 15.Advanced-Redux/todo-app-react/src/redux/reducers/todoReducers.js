import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    todos: [
        {
            todo: "study at 6'O clock",
            completed: true
        },
        {
            todo: "office at 9'O clock",
            completed: false
        }
    ]
}
export const getInitialStateAsync = createAsyncThunk(
    // 'todo/getInitialState',
    // (arg, thunkAPI) => {
    //     axios.get('').then((res) => {
    //         console.log(res.data);
    //         thunkAPI.dispatch(actions.setInitialState(res.data));
    //     })
    // }

    () => {
        return axios.get("");
    }
);

export const addToDoAsync = createAsyncThunk("todo/addTodo", async (payload)=>{
    const response = await fetch("", {
        method: "POST",
        headers:{
            "content-type":"application/json"
        },
        body: {
            todo: payload,
            completed: false
        }
    })
})

//creating Reducer using Reducer Toolkit

const todoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        setInitialState: (state, action) => {
            state.todos = [...action.payload]
        },
        //add-action
        add: (state, action) => {
            state.todos.push({
                todo: action.payload,
                completed: false
            })
        },
        //toggle action -> completed or pending
        toggle: (state, action) => {
            state.todos.map((todo, i) => {
                if (i === action.payload) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getInitialState.fulfilled, (state, action) => {
            state.todos=[...action.payload.data]
        }
        )
        .addCase(addToDoAsync.fulfilled, (state, action) => {
            state.todos.push(action.payload)
        })
    }
});

export const todoReducer = todoSlice.reducer;

export const actions = todoSlice.actions;

// selecter
export const todoSelector = (state) => state.todoReducer.todos;