import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    contacts: [],
    isLoading: false,
    error: null
};

export const getContacts = createAsyncThunk("contacts/getContacts", async(_, thunkAPI) => {
    try{
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        if(!response.ok){
            throw new Error("Failed to fetch Contacts");
        }
        const data = await response.json();
        thunkAPI.dispatch(fetchSuccess(data));
    }
    catch(error){
        thunkAPI.dispatch(fetchError());
    }
})


const contactSlice = createSlice({
    name: "contacts",
    initialState: INITIAL_STATE,
    reducers: {
        //FETCH PART...
        fetchStart: (state, action) => {
            state.isLoading = true
        },
        fetchSuccess: (state, action) => {
            state.contacts = action.payload
            state.isLoading = false
        },
        fetchError: (state, action) => {
            state.error = "Failed to fetch Contacts"
            state.isLoading = false
        },
        //CONDITIONS...
        AddContact: (state, action) => {
            state.contacts = [action.payload, ...state.contacts]
        },
        UpdateContact: (state, action) => {
            const updateContact = state.contacts.map((user) => 
                user.id ===action.payload.id ? action.payload: user
            )
            state.contacts = updateContact
        },
        DeleteContact: (state, action) => {
            const filterContacts = state.contacts.filter((user) => 
                user.id !== action.payload && user
            )
            state.contacts = filterContacts
        }
    }
})

export const contactReducer = contactSlice.reducer;

export const {
    fetchStart,
    fetchSuccess,
    fetchError,
    AddContact,
    DeleteContact,
    UpdateContact
} = contactSlice.actions;

export const contactSelector = (state) => state.contactReducer