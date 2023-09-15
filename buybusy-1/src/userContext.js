//IMPORT HOOK AND CONTEXT
import {
    useState,
    useContext,
    createContext
} from 'react'

//IMPORT DATABASE
import { db } from "./firebaseinit"

//IMPORT FIREBASE KEYWORDS
import {
    addDoc,
    collection,
    getDocs,
    updateDoc,
    doc
} from 'firebase/firestore';

//GETTING TOAST
import { toast } from 'react-toastify';

//CREATE CONTEXT
const userContext = createContext();

//USE CUSTOM HOOK
export const useUserContext = () => {
    const value = useContext(userContext);
    return value;
}

//USE CUSTOM CONTEXT
export const UserContextProvider = ({ children }) => {

    //authentication
    const [authenticate, setAuthenticate] = useState(false);

    //make user info
    const [userCart, setUserCart] = useState([]);
    const [userOrder, setUserOrder] = useState([]);
    const [userId, setUserId] = useState("");

    //get date
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate();

    //check authentication
    const authenticateUser = async (email, password) => {
        let isFound = false;
        const users = collection(db, "users");
        const querySnapshot = await getDocs(users);
        querySnapshot.forEach((doc) => {
            if (doc.data().email === email && doc.data().password === password) {
                console.log(doc.id);
                setUserId(doc.id);
                setUserOrder(doc.data().orders);
                setUserCart(doc.data().cart);
                isFound = true
                setAuthenticate(true);
                console.log("auth", isFound);
            }
            else if (doc.data().email !== email && doc.data().password !== password) {
            }
        })
        if (isFound) {
            return true;
        }
        else {
            return false;
        }
    }

    //add new user
    const newUser = (name, email, password) => {
        const user = {
            name: name,
            email: email,
            password: password,
            cart: [],
            orders: []
        }
        const useRef = collection(db, "users");
        const docRef = addDoc(useRef, user);
        setAuthenticate(true);
        toast.success("New User Created Successfully")
    }

    //logout user
    const logout = async () => {
        console.log(userId);
        const useRef = doc(db, "users", userId);
        await updateDoc(useRef, {
            orders: userOrder,
            cart: userCart
        });
        setAuthenticate(false);
        toast.success("Log out Successfully");
    }

    //set use cart
    const setCartUser = (cart) => {
        setUserCart(cart);
    }

    // checkout
    const checkOut = () => {
        let orderDate = date.toString() + '-' + month.toString() + '-' + year.toString();
        let newOrder = { date: orderDate, order: userCart };
        setUserOrder([newOrder, ...userOrder])
        setUserCart([]);
        toast.success("Items Purchased Successfully");
    };

    //remove from cart
    const removeFromCart = (id) => {
        let updatedCart = userCart.filter((product) => product.id !== id)
        setUserCart(updatedCart);
        toast.error("Item delated Successfully")
    }

    return (
        <userContext.Provider value={{
            authenticate,
            authenticateUser,
            newUser,
            logout,
            setCartUser,
            removeFromCart,
            checkOut,
            userCart,
            setUserCart,
            userOrder
        }}>
            {children}
        </userContext.Provider>
    )
}