//GETTING STYLES
import styles from './cart.module.css';

//GETTING USER CONTEXT TO USE
import { useUserContext } from '../../userContext';

//GETTING NAVLINK TO ROUTE THE PAGES
import { NavLink, Navigate } from 'react-router-dom';

const Cart = () => {
    const {userCart, removeFromCart, checkOut, authenticate} = useUserContext();
    //if not authenticate then return homepage
    if(!authenticate){
        return (
            <Navigate to='/' replace={true}/>
        )
    }
    return (
        <>
        <div className={styles.container}>
            <h1>Cart</h1>
            <aside className={styles.cartTotalPrice}>
                <p>Total Price: &#x20B9; {userCart.reduce((total, product) => total + product.price*product.count, 0)}/-</p>
                <NavLink to='/orders' onClick={() => {checkOut()}} className={styles.button}>Purchase</NavLink>
            </aside>
            <div className={styles.productContainerGrid}>
                    {userCart.map((item) => (
                        <div className={styles.productContainer}>
                            <div className={styles.productImageContainer}>
                                <img src={item.image} alt="bag" />
                            </div>
                            <div className={styles.productDetailContainer}>
                                <div className={styles.name}>
                                    <p>
                                        {item.title}
                                    </p>
                                </div>
                                <div className={styles.price}>
                                    <p>
                                        &#x20B9; {item.price}
                                    </p>
                                </div>
                                <button className={styles.btn} onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
        </>
        
    )
};
export default Cart;