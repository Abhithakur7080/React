//GETTING STYLE
import styles from "./Login.module.css"

//GETTING ROUTER COMPONENTS
import { NavLink, useNavigate } from "react-router-dom";

// GETTING TOAST
import { toast } from 'react-toastify';

//GETTING ERROR ACTION FROM PRODUCT REDUCER
import { fetchError } from "../../redux/reducers/productReducer";

//GETTING REACT-REDUX COMPONENTS
import { useDispatch } from "react-redux";

//GETTING ACTIONS FROM FIREBASE/AUTH
import { signInWithEmailAndPassword } from "firebase/auth";

//GETTING FIREBASE COMPONENTS TO USE
import { auth, db } from "../../firebaseinit";

//GETTING SELECTOR FROM AUTH REDUCER
import { setCurrentUser } from "../../redux/reducers/authReducer";

//GETING ACTIONS FROM CART REDUCER
import { setCart } from "../../redux/reducers/cartReducer";

//GETTING ACTIONS FROM ORDER REDUCER
import { collection, getDocs } from "firebase/firestore";

//GETTING ACTIONS FROM ORDER REDUCER
import { setOrders } from "../../redux/reducers/orderReducer";

const Login = () => {

    //initialise navigate to use in navigations
    const navigate = useNavigate();

    //initialise dispatch to use in actions
    const dispatch = useDispatch();

    //hanle sumbit to login with email and password
    const handleSubmit = async (e) => {
        e.preventDefault();
        //get values
        const email = e.target[0].value;
        const password = e.target[1].value;

        try{
            const User = await signInWithEmailAndPassword(auth, email, password);

            dispatch(setCurrentUser(User))
            //get data from database
            const users = collection(db, "users");
            const querySnapshot = await getDocs(users);
            querySnapshot.forEach(async (user) => {
                const userId = User.user.uid;
                const currentUserDoc = querySnapshot.docs.find((doc) => doc.id === userId);
                if (currentUserDoc) {
                    const userData = currentUserDoc.data();
                    dispatch(setCart(userData.carts));
                    dispatch(setOrders(userData.orders));
                }
            })
            //navigate to homepage
            navigate('/');
            toast.success("Logged In Successfully");
        }
        catch(error){
            //error
            dispatch(fetchError(true));
            toast.error("Please enter valid email/password");
        }
    }
    
    return (
    <>
        <div className={styles.container}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className={styles.form} >
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
                <button type="submit" className={styles.button}>Login</button>
                <br />
                <span className={styles.text}>New User? <NavLink to='/signup' className={styles.link}>Sign Up</NavLink></span>
            </form>
        </div>
    </>  
    )
}
export default Login;