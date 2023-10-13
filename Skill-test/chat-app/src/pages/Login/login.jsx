//GETTING REACT COMPONENTS
import { useState } from "react";

//GETTING FIREBASE AUTH COMPONENTS
import { signInWithEmailAndPassword } from "firebase/auth";

//GETTING COMPONENTS FROM FIREBASE FILE
import { auth } from "../../firebaseinit";

//GETTING TOAST
import { toast } from "react-toastify";

//GETTING ROUTING COMPONENTS
import { NavLink, useNavigate } from "react-router-dom";

//GETTING IMAGE
import logo from "../../images/icon.png";

export const Login = () => {

    //making of state
    const [error, setError] = useState(false);

    //initialize navigate components
    const navigate = useNavigate();

    //on submit function
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
                {error && <span>Something went Wrong!!!</span>}
            </div>
        </div>
    )
}