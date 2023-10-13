//GETTING OF REACT COMPONENTS
import { createContext, useContext, useReducer } from "react";

//GETTING OF CONTEXT FROM AUTH CONTEXT
import { AuthContext } from "./authContext";

//making of context and export
export const ChatContext = createContext();

//making of provider
export const ChatContextProvider = ({ children }) => {

    //using current user from auth context
    const { currentUser } = useContext(AuthContext);

    //set initial state
    const INITIAL_STATE = {
        chatId: "null",
        user: {}
    };

    //using reducer
    const chatReducer = (state, action) => {
        switch (action.type) {
            case "CHANGE_USER":
                return {
                    user: action.payload,
                    chatId:
                        currentUser.uid > action.payload.uid
                            ? currentUser.uid + action.payload.uid
                            : action.payload.uid + currentUser.uid
                }
            default:
                return state;
        }
    }

    //set reducer and pass value
    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

    return (
        <ChatContext.Provider value={{ data: state, dispatch }}>
            {children}
        </ChatContext.Provider>
    )
}