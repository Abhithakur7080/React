import { createSlice } from '@reduxjs/toolkit';
import { actions } from './todoReducers';
import { noteActions } from './noteReducers';

const initialState = {
    message: ""
};

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        reset: (state) => {
            state.message = ""
        }

    },
    // extraReducers: {
    //     "todo/add": (state, action) => {
    //         state.message="TODO is Created";
    //     }
    // }
    // extraReducers: (builder) => {
    //     // using builder inbuilt functions
    //     builder.addCase(actions.add, (state) => {
    //         state.message= "TODO is Created"
    //     });
    // }
    extraReducers: {
        //using map [key]: value pairs
        [actions.add]: (state) => {
            state.message = "TODO is Created"
        }
    }
});

export const notificationReducer = notificationSlice.reducer;

export const resetNotification = notificationSlice.actions.reset;
// export const resetNotification1 = notificationSlice.noteActions.reset;

export const notificationSelector = (state) => state.notificationReducer.message;