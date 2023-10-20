//GETTING STYLES
import styles from "./navbar.module.css";
//GETTING LOGO IMAGE
import logoImg from "./logo.png"
//GETTING ROUTE COMPONENT
import { NavLink } from "react-router-dom";

export const Navbar = ({page, path, title}) => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.left}>
                <img src={logoImg} alt="logo"/>
                <h1>Contact Lists</h1>
            </div>
            <div className={styles.middle}>
                <h1>{title}</h1>
            </div>
            <NavLink to={path} className={styles.right}>
                <button>{page}</button>
            </NavLink>
        </div>
        </>
    )
}