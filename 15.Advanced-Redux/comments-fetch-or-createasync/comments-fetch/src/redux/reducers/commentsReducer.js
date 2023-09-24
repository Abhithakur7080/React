// import redux toolkit methods here
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = { comments: [], isLoading: false, error: null };

// define comments reducer function here
const commentsSlice = createSlice({
    name: "comments",
    initialState: INITIAL_STATE,
    reducers: {
        fetchStart: (state, action) => {
            state.isLoading = true;
        },
        fetchSuccess: (state, action) => {
            state.comments = action.payload;
            state.isLoading = false;
        },
        fetchError: (state, action) => {
            state.error = "Failed to fetch comments.";
            state.isLoading = false;
        }
    }
})

// export the comments reducer function and action creators here
export const commentsReducer = commentsSlice.reducer;

export const { fetchStart, fetchSuccess, fetchError } = commentsSlice.actions;

// export the comments selector function here

export const commentsSelector = (state) => state.commentsReducer;
