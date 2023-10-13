//GETTING COMPONENTS FROM REACT
import { createContext, useEffect, useState } from 'react';

//GETTING COMPONENTS FROM FIREBASE AUTH
import { onAuthStateChanged } from 'firebase/auth';

//GETTING COMPONENTS FROM FIREBASE FILE
import { auth } from '../firebaseinit';

//making of context and export
export const AuthContext = createContext();

//making of provider
export const AuthContextProvider = ({children}) => {

    //making state
    const [currentUser, setCurrentUser] = useState({});

    //using react component to get authorization
    useEffect(() =>{
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            console.log(user);
        });
        return () => {
            unsub();
        };
    }, []);

    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}