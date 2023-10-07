//GETTING STYLES
import styles from "./SignUp.module.css"

//GETTING NAVLINK TO ROUTE THE PAGES
import { NavLink, useNavigate } from "react-router-dom";

//GETTING TOAST
import { toast } from "react-toastify";

//GETTING DISPATCH FROM REDUX TO DO ALL ACTIONS
import { useDispatch } from "react-redux";

//GETTING AUTH COMPONENTS
import { createUserWithEmailAndPassword } from "firebase/auth";

//GETTING FIREBASE COMPONENTS TO USE
import { auth, db } from "../../firebaseinit";

//GETTING ERROR ACTION FROM PRODUCT REDUCER
import { fetchError } from "../../redux/reducers/productReducer";

//GETTING FIRESTORE COMPONENTS
import { doc, setDoc } from "firebase/firestore";

//GETTING ACTION FROM AUTH REDUCER
import { setCurrentUser } from "../../redux/reducers/authReducer";

//GETING ACTIONS FROM CART REDUCER
import { setCart } from "../../redux/reducers/cartReducer";

//GETTING ACTIONS FROM ORDER REDUCER
import { setOrders } from "../../redux/reducers/orderReducer";

const SignUp = () => {
    //initialise dispatch to use in actions
    const dispatch = useDispatch();

    //initialise navigate to use in navigations
    const navigate = useNavigate();

    // signup settings function
    const handleSubmit = async (e) => {
        e.preventDefault();
        //get values
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        // setting initially empty
        const carts = dispatch(setCart([]));
        const orders = dispatch(setOrders([]));

        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(db, "users", userCredential.user.uid), {
                displayName,
                email,
                password,
                carts,
                orders
            })
            dispatch(setCurrentUser(userCredential))
            navigate('/');
            toast.success("User Created Successfully");
        }
        catch(error) {
            dispatch(fetchError(true));
            toast.error("Please enter valid Email/Password");
        }
    }
    
    return (
        <div className={styles.container}>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputContainer}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name here..."
                        id="name"
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email here..."
                        id="email"
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password here..."
                        id="password"
                    />
                </div>
                <button type="submit" className={styles.button}>Sign Up</button>
                <br />
                <span className={styles.text}>Already User? <NavLink to='/login' className={styles.link}>Login</NavLink></span>
            </form>
        </div>
    )
}
export default SignUp;