import { Component } from "react";
import styles from "./navbar.module.css"

class Navbar extends Component{
    render(){
        return(
            <>
                <div className={styles.nav}>
                    <div className={styles.title}>
                        <img src="https://cdn-icons-png.flaticon.com/128/777/777242.png" alt="title" className={styles.image}/>
                        <span className={styles.name}>Movies App</span>
                    </div>
                    <div className={styles.cartContainer}>
                        <img src="https://cdn-icons-png.flaticon.com/128/891/891462.png" alt="cart-icon" className={styles.cartIcon}/>
                        <span className={styles.cartCount}>0</span>
                    </div>
                </div>
            </>
        )
    }
}

export default Navbar;