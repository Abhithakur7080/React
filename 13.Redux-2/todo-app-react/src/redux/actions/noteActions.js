//Actions constraints
export const ADD_NOTE = "ADD Note";
export const DELETE_NOTE = "Delete Note";

// Actions Creaters
export const addNote = (text) => ({text, type: ADD_NOTE});
export const deleteNote = (index) => ({index, type: DELETE_NOTE});
