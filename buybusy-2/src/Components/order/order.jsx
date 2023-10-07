//GETTING STYLES
import styles from './order.module.css'

//GETTING ACTION FROM AUTH REDUCER
import { authSelector, deserializeUser } from '../../redux/reducers/authReducer';

//GETTING NAVLINK TO ROUTE THE PAGES
import { Navigate } from 'react-router-dom';

//GETTING REACT-REDUX COMPONENTS
import { useSelector } from 'react-redux';

//GETTING SELECTORS FROM ORDER REDUCER
import { orderSelector } from '../../redux/reducers/orderReducer';

const Order = () => {

    //setting for user
    const { currentUser } = useSelector(authSelector);
    const User = deserializeUser(currentUser)

    //get to use orders
    const { orders } = useSelector(orderSelector);
    
    //if not authenticated then return to homepage
    if(!User){
        return (
            <Navigate to='/' replace={true}/>
        )
    }
    return(
        <div className={styles.container}>
            <h1>My Orders</h1>
            {orders.map((orders) => {
                return(
               <div className={styles.orderDetails} key={orders.id}>
                <h2>Order on:- {orders.date}</h2>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.order.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{Number(item.price).toFixed(2)}</td>
                                    <td className={styles.count}>{item.count}</td>
                                    <td>{Number(item.price*item.count).toFixed(2)}</td>
                                </tr>
                            )
                            
                        })}
                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan={2}></th>
                            <th></th>
                            <th>Total:-</th>
                            <th>&#x20B9; {Number(orders.order.reduce((total, product) => total + product.price*product.count, 0)).toFixed(2)}/-</th>
                        </tr>
                    </tfoot>
                </table>
            </div> 
            )})}   
        </div>    
    )
}
export default Order;