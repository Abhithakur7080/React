//GETTING STYLES
import styles from './cart.module.css';

//GETTING NAVLINK TO ROUTE THE PAGES
import { NavLink, Navigate } from 'react-router-dom';

//GETTING REACT-REDUX COMPONENTS
import { useDispatch, useSelector } from 'react-redux';

//GETTING ACTION FROM AUTH REDUCER
import { authSelector, deserializeUser } from '../../redux/reducers/authReducer';

//GETING ACTIONS AND SELECTOR FROM CART REDUCER
import { cartSelector, decreaseItemToCart, increaseItemToCart, deleteItemFromCart } from '../../redux/reducers/cartReducer';

//GETING ACTIONS AND SELECTOR FROM ORDER REDUCER
import { orderSelector, purchase } from '../../redux/reducers/orderReducer';

const Cart = () => {
    //initialise dispatch to use in actions
    const dispatch = useDispatch();

    //setting for user
    const { currentUser } = useSelector(authSelector);
    const User = deserializeUser(currentUser);


    //getting state from selector
    const { carts } = useSelector(cartSelector);
    //getting state from selector
    const { orders } = useSelector(orderSelector);

    //if not authenticate then return homepage
    if(!User){
        return (
            <Navigate to='/' replace={true}/>
        )
    }
    return (
        <>
            <div className={styles.container}>
                <h1>Cart</h1>
                <aside className={styles.cartTotalPrice}>
                    <p>Total Price: &#x20B9; {Number(carts.reduce((total, product) => total + product.price * product.count, 0)).toFixed(2)}/-</p>
                    <NavLink to="/orders" onClick={() => dispatch(purchase({carts, orders}))} className={styles.button}>Purchase</NavLink>
                </aside>
                <div className={styles.productContainerGrid}>
                    {carts.map((item) => (
                        <div className={styles.productContainer} key={item.id}>
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
                                <div className={styles.minusplus}>
                                    <button onClick={() => dispatch(decreaseItemToCart({id: item.id, user: currentUser}))}><i className="fa-solid fa-minus"></i></button>
                                    <span>{item.count}</span>
                                    <button onClick={() => dispatch(increaseItemToCart({id: item.id, user: currentUser}))}><i className="fa-solid fa-plus"></i></button>
                                </div>
                                <button onClick={() => dispatch(deleteItemFromCart({id: item.id, user: currentUser}))} className={styles.btn}>Remove from Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
};
export default Cart;