import { useContext } from "react"
import logo from "../../icon.png"
import { AuthContext } from "../../context/authContext"
import { signOut } from "firebase/auth"
import { auth } from "../../firebaseinit"

export const Navbar = () => {
    const { currentUser } = useContext(AuthContext)
    return (
        <div className="navbar">
            <div className="info">
                <img src={logo} alt="logo" />
                <span className="title">Chat App</span>
            </div>
            <button onClick={() => signOut(auth)}>Logout</button>
        </div>
    )
}