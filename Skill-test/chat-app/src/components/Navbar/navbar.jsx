//GETTING REACT COMPONENTS
import { useContext } from "react"

//GETTING COMPONENT FROM AUTH FILE
import { AuthContext } from "../../context/authContext"

//GETTING COMPONENT FROM FIREBASE AUTH
import { signOut } from "firebase/auth"

//GETTING AUTH COMPONENT FROM FIREBASE FILE
import { auth } from "../../firebaseinit"

//GETTING TOAST
import { toast } from "react-toastify"

export const Navbar = () => {

    // using current info frm auth context
    const { currentUser } = useContext(AuthContext);
    
    //LOGOUT function on navbar
    const logOut = async () => {
        try{
            await signOut(auth);
            toast.success("Logged out Successfully");
        }
        catch(error){
            console.error(error);
        }
    }
    
    return (
        <div className="navbar">
            <div className="info">
                <img src={currentUser.photoURL} alt="logo" />
                <span className="title">{currentUser.displayName}</span>
            </div>
            <button onClick={logOut}>Logout</button>
        </div>
    )
}