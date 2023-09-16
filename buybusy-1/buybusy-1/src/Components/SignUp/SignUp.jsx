//GETTING STYLES
import styles from "./SignUp.module.css"

//GETTING USER CONTEXT TO USE
import { useUserContext } from "../../userContext";

//GETTING NAVLINK TO ROUTE THE PAGES
import { NavLink, useNavigate } from "react-router-dom";

//GETTING HOOKS
import { useState } from "react";

//GETTING TOAST
import { toast } from "react-toastify";

const SignUp = () => {
    const { newUser } = useUserContext();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    //target user name
    const handleUsernameChange = (e) => {
        setName(e.target.value);
    }
    //target user password
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    //target user email
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    // signup settings function
    const signup = () => {
        if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
            toast.error("Please Enter Name, Username and Password");
        }
        else {
            newUser(name, email, password);
            navigate("/")
        }
    }
    return (
        <div className={styles.container}>
            <h2>Sign Up</h2>
            <form className={styles.form}>
                <div className={styles.inputContainer}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name here..."
                        id="name"
                        onChange={(e) => handleUsernameChange(e)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email here..."
                        id="email"
                        onChange={(e) => handleEmailChange(e)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password here..."
                        id="password"
                        onChange={(e) => handlePasswordChange(e)}
                    />
                </div>
                <NavLink onClick={signup} className={styles.button}>Sign Up</NavLink>
                <br />
                <span className={styles.text}>Already User? <NavLink to='/login' className={styles.link}>Login</NavLink></span>
            </form>
        </div>
    )
}
export default SignUp;