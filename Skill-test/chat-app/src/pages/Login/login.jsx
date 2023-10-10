import { useState } from "react";
import logo from "../../icon.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseinit";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";

export const Login = () => {
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try{
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
            toast.success("Logged In Successfully")
        }
        catch(error){
            toast.error("Please check your Email/Password")
            setError(true);
        }
    }
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <div className="head">
                    <img src={logo} alt="logo"/>
                    <span className="title">Chat App</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <span className="header"> Log In</span>
                    <hr/>
                    <input type="email" placeholder="Enter your Email here..."/>
                    <input type="password" placeholder="Enter your Password here..."/>
                    <button type="submit">Sign In</button>
                    <h4>New user? <NavLink to="/register">Register</NavLink> here.</h4>
                </form>
            </div>
        </div>
    )
}