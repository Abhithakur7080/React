// ACTIONS
//1. add a todo
//2. toggle-> mark as completed /or/ mark as uncompleted
const ADD_TODO = "ADD TODO";
const TOGGLE_TODO = "TOGGLE TODO";

//ACTION CREATERS
const addToDo = (text) => ({text, type: ADD_TODO});
const toggleToDo = (index) => ({index, type: TOGGLE_TODO});

//Initial state
const initialState = {
    todos: []
}

//REDUCERS
//must return updated state
function todoReducer(state=initialState, action){
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    },
                ],
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, i) => {
                    if(i===action.index){
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    }
                    return todo;
                }),
            };
        default:
            return state;
    }
}


//STORE
const redux = require("redux");

//creating store
const store = redux.createStore(todoReducer);

//dispatch actions
store.dispatch(addToDo("Study at 6'o clock"));
store.dispatch(addToDo("Office at 9'o clock"));
store.dispatch(toggleToDo(0)); //completed: true "Study at 6'o clock" at index: 0

// read data from store
console.log(store.getState());
/*
{
  todos: [
    { text: "Study at 6'o clock", completed: true },
    { text: "Office at 9'o clock", completed: false }
  ]
}
*/