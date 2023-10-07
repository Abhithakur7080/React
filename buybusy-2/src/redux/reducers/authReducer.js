//GETTING @reactjs/toolkit COMPONENT
import { createSlice } from '@reduxjs/toolkit';

//serialize String to JSON
const serializeUser = (user) => {
  return JSON.stringify(user);
}

// Deserialize JSON to Firebase User
export const deserializeUser = (json) =>  {
  return JSON.parse(json);
}

//Reducer
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    currentUser: null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = serializeUser(action.payload);
    },
  },
});

//export reducer
export const authReducer = authSlice.reducer;
//export actions
export const { setCurrentUser } = authSlice.actions;
//export selector(states)
export const authSelector = (state) => state.authReducer;

