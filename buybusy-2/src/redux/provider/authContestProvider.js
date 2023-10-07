//GETTING ACTION FROM FIREBASE/AUTH
import { onAuthStateChanged } from "firebase/auth";

//GETTING REACT-COMPONENTS/HOOKS
import { createContext, useEffect } from "react";

//GETTING REDUX COMPONENTS TO DO ALL ACTIONS/SELECTOR
import {useDispatch, useSelector} from "react-redux"

//GETTING FIREBASE COMPONENTS TO USE
import { auth } from "../../firebaseinit";

//GETTING ACTION AND SELECTOR FROM AUTH REDUCER
import { setCurrentUser, authSelector } from "../reducers/authReducer";

//making of auth context
export const AuthContext = createContext();

//making of auth context provider
export const AuthContextProvider = ({children}) => {

    //setting for user
    const { currentUser } = useSelector(authSelector)
    const dispatch = useDispatch();

    //authentication
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            dispatch(setCurrentUser(user));
        })
        return () => {
            unsub()
        }
    }, [dispatch]);

    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}