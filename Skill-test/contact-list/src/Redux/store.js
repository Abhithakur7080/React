import { configureStore } from "@reduxjs/toolkit";

import { contactReducer } from "./contactReducer";

export const store = configureStore({
    reducer: {
        contactReducer
    }
})