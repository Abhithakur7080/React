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

//GETTING USER CONTEXT TO USE
import { useUserContext } from '../../userContext'

//GETTING NAVLINK TO ROUTE THE PAGES
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    //use context
    const { authenticate, logout } = useUserContext();
    return (
    <>
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <img src={logoImg} alt="logo" />
                <h4> Busy Buy</h4>
            </div>
            <div className={styles.buttons}>
                {authenticate ? (
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
                        <NavLink onClick={() =>{logout()}} to='/' className={styles.btn}>
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