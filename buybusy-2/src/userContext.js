//IMPORT HOOK AND CONTEXT
import {
    useContext,
    createContext
} from 'react'

//CREATE CONTEXT
const userContext = createContext();

//USE CUSTOM HOOK
export const useUserContext = () => {
    const value = useContext(userContext);
    return value;
}

//USE CUSTOM CONTEXT
export const UserContextProvider = ({ children }) => {
    const contextValue = {
        user: null
    }
    return (
        <userContext.Provider value={{contextValue}}>
            {children}
        </userContext.Provider>
    )
}