import {
    ADD_TODO,
    TOGGLE_TODO
} from "../actions/todoActions";

const initialState = {
    todos:[
        {
            text: "study at 6'O clock",
            completed: true
        },
        {
            text: "office at 9'O clock",
            completed: false
        }
    ]
}

export default function todoReducer(state=initialState, action) {
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
                todos: state.todos.map((todo, index) => {
                    if(index===action.index){
                        return{
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