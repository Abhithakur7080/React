import {
    ADD_NOTE,
    DELETE_NOTE
} from "../actions/noteActions";

const initialState = {
    notes:[
        {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            createdOn: new Date()
        },
        {
            text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
            createdOn: new Date()
        }
    ]
}

export default function notesReducer(state=initialState, action) {
    switch(action.type){
        case ADD_NOTE:
            return {
                ...state,
                notes: [
                    ...state.notes,
                    {
                        text: action.text,
                        createdOn: new Date()
                    },
                ],
            };
        case DELETE_NOTE:
            state.notes.splice(action.index, 1);
            return {
                ...state,
                notes: [...state.notes]
            };
        default:
            return state;
    }
}