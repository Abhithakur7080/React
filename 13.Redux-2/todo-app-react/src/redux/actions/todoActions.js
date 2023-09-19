//Actions constraints
export const ADD_TODO = "ADD TODO";
export const TOGGLE_TODO = "Toggle todo";

// Actions Creaters
export const addTodo = (text) => ({text, type: ADD_TODO});
export const toggleTodo = (index) => ({index, type: TOGGLE_TODO});

