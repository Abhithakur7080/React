import { createContext, useState, useContext } from "react";
import CartModal from './components/CartModal'
const itemContext = createContext();

function useValue(){
    const value = useContext(itemContext);
    return value;
}

function CustomItemContext({children}) {
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const [showCart, setShowCart] = useState(false);
    const [cart, setCart] = useState([]);

    const handleAdd = (product) => {
        const index = cart.findIndex((item) => item.id === product.id)
        //return -1 if id not present
        if(index===-1){
            setCart([...cart, {...product, Quantity:1}]);
            setTotal(total+product.price);
        }
        else{
            cart[index].Quantity++;
            setCart(cart);
            setTotal(total+cart[index].price);
        }
        setItem(item+1);
    };
    
    const handleRemove = (product) => {
        const index = cart.findIndex((item) => item.id === product.id)
        if(index!==-1){
            cart[index].Quantity--;
            setItem(item-1);
            setTotal(total-cart[index].price);
            if(cart[index].Quantity === 0){
                cart.splice(index, 1);
            }
        }
        setCart(cart);
    };

    const reset = () => {
        setItem(0);
        setTotal(0)
        setCart([]);
    }

    const toggle = () => {
        setShowCart(!showCart);
    }


    return (
      <itemContext.Provider value={{
        item,
        setItem,
        total,
        setTotal,
        handleAdd,
        handleRemove,
        reset,
        toggle,
        cart
        }}>
        {showCart && <CartModal/>}
        {children}
      </itemContext.Provider>
    );
}
export {itemContext};
export default CustomItemContext;
export {useValue};