//GETTING LOGO AND ICONS
///logo
import logoImg from "./icons/logo.png"
//icons
import homeImg from './icons/home.png'
import cartImg from './icons/cart.png'
import myorderImg from './icons/myorder.png'
import logoutImg from './icons/logout.png'
import signinImg from './icons/signin.png'

//GETTING STYLES
import styles from "./Navbar.module.css"

//GETTING NAVLINK TO ROUTE THE PAGES
import { NavLink } from 'react-router-dom'

//GETTING REACT-REDUX COMPONENTS
import { useDispatch, useSelector } from "react-redux";

//GETTING ACTION AND SELECTORS FROM AUTH REDUCER
import { authSelector, deserializeUser, setCurrentUser } from "../../redux/reducers/authReducer"

//GETTING ACTIONS FROM FIREBASE/AUTH
import { signOut } from "firebase/auth"

//GETTING FIREBASE COMPONENTS TO USE
import { auth } from "../../firebaseinit"

//GETTING ERROR ACTION FROM PRODUCT REDUCER
import { fetchError } from "../../redux/reducers/productReducer"

//GETTING TOAST
import { toast } from 'react-toastify';

const Navbar = () => {
    //setting for user
    const { currentUser } = useSelector(authSelector);
    const User = deserializeUser(currentUser);

    //initialise dispatch to use in actions
    const dispatch = useDispatch();

    //handle logout function
    const logout = async () => {
        try{
            await signOut(auth);
            dispatch(setCurrentUser(null));
            
            toast.success("Logged out Successfully")
        } catch {
            dispatch(fetchError(true));
        }
    }
    return (
        <>
            <nav className={styles.nav}>
                <NavLink to="/" className={styles.logo}>
                    <img src={logoImg} alt="logo" />
                    <h4> Busy Buy</h4>
                </NavLink>
                <div className={styles.buttons}>
                    {User ? (
                        <>
                            <NavLink to='/' className={styles.btn}>
                                <span>
                                    <img
                                        src={homeImg}
                                        alt="home"
                                        className={styles.img}
                                    />
                                </span>
                                <span className={styles.text}>Home</span>
                            </NavLink>
                            <NavLink to='/orders' className={styles.btn}>
                                <span>
                                    <img
                                        src={myorderImg}
                                        alt="myorder"
                                        className={styles.img}
                                    />
                                </span>
                                <span className={styles.text}>My Orders</span>
                            </NavLink>
                            <NavLink to='/cart' className={styles.btn}>
                                <span>
                                    <img
                                        src={cartImg}
                                        alt="cart"
                                        className={styles.img}
                                    />
                                </span>
                                <span className={styles.text}>Cart</span>
                            </NavLink>
                            <NavLink onClick={logout} to='/' className={styles.btn}>
                                <span>
                                    <img
                                        src={logoutImg}
                                        alt="logout"
                                        className={styles.img}
                                    />
                                </span>
                                <span className={styles.text}>logout</span>
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink to='/' className={styles.btn}>
                                <span>
                                    <img
                                        src={homeImg}
                                        alt="home"
                                        className={styles.img}
                                    />
                                </span>
                                <span className={styles.text}>Home</span>
                            </NavLink>
                            <NavLink to='/login' className={styles.btn}>
                                <span>
                                    <img
                                        src={signinImg}
                                        alt="login"
                                        className={styles.img}
                                    />
                                </span>
                                <span className={styles.text}>LogIn</span>
                            </NavLink>
                        </>
                    )}
                </div>
            </nav>
        </>
    )
}
export default Navbar;