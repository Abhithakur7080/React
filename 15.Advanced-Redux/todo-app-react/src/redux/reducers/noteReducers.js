import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes:[
        {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            createdOn: new Date().toString()
        },
        {
            text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
            createdOn: new Date().toString()
        }
    ]
}
//creating Reducer using Reducer Toolkit

const noteSlice = createSlice({
    name: "note",
    initialState: initialState,
    reducers: {
        //add-action
        add: (state, action) => {
            state.notes.push({
                text: action.payload,
                createdOn: new Date().toString()
            })
        },
        //delete-action
        delete: (state, action) => {
            state.notes.splice(action.payload, 1)
        }
    }
});

export const notesReducer = noteSlice.reducer;

export const noteActions = noteSlice.actions;

export const noteSelector = (state) => state.notesReducer.notes;