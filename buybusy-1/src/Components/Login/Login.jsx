//GETTING STYLE
import styles from "./Login.module.css"

//GETTING CONTEXT
import { useUserContext } from "../../userContext";

//GETTING ROUTER COMPONENTS
import { NavLink, useNavigate } from "react-router-dom";

//GETTING HOOKS
import { useState } from "react";

// GETTING TOAST
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();
    const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");

    //target username
    const handleUsername  = (e) =>{
        setUserName(e.target.value);
    };
    //target password
    const handlePassword  = (e) =>{
        setPassword(e.target.value);
    };
    //use context
    const {authenticateUser} = useUserContext();

    // login settings function
    const login = async () => {
        if(username.trim()==="" || password.trim()===""){
            toast.error("Please Enter Username and Password");
        }
        else{
            const result = await authenticateUser(username, password);
            if (!result) {
                toast.error("Invalid Username/Password");
            }
            else{     
                toast.success("Login Successfully");
                navigate("/");
            }
        }
    }
    return (
    <>
        <div className={styles.container}>
            <h2>Login</h2>
            <form className={styles.form}>
                <div className={styles.inputContainer}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email here..."
                        id="email"
                        onChange={handleUsername}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password here..."
                        id="password"
                        onChange={handlePassword}
                    />
                </div>
                <NavLink onClick={login} className={styles.button}>Login</NavLink>
                <br />
                <span className={styles.text}>New User? <NavLink to='/signup' className={styles.link}>Sign Up</NavLink></span>
            </form>
        </div>
    </>  
    )
}
export default Login;