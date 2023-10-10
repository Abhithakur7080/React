import { useContext } from "react"
import { AuthContext } from "../../context/authContext"
import { signOut } from "firebase/auth"
import { auth } from "../../firebaseinit"
import { toast } from "react-toastify"

export const Navbar = () => {
    const { currentUser } = useContext(AuthContext);
    
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