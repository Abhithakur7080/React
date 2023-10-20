//GETTING @reactjs/toolkit COMPONENTS
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//GETTING TOAST
import { toast } from 'react-toastify';

//GETTING COMPONENTS FROM FIREBASE/FIRESTORE
import { doc, updateDoc, getDocs, collection } from "firebase/firestore";

//GETTING COMPONENTS FROM FIREBASE FILE
import { db } from "../../firebaseinit";

//GETTING ACTION AND SELECTOR FROM AUTH REDUCER
import { authSelector, deserializeUser } from "./authReducer";

//GETTING REACT-REDUX COMPONENTS
import { useSelector } from "react-redux";

//MAKING INITIAL STATE
const INITIAL_STATE = {
    carts: []
}

// add to cart
export const addToCart = createAsyncThunk("carts/addToCart",
    async ({ products, carts, id, user }, thunkAPI) => {
        const newItem = products.find((item) => item.id === id);
        const alreadyInCart = carts.find((item) => item.id === id);
        if (!alreadyInCart) {

            thunkAPI.dispatch(newAddToCart(newItem));
            toast.success(`1x item added`)
        }
        else {
            thunkAPI.dispatch(increaseItem(id));
            toast.success(`${alreadyInCart.count + 1}x item added`);
        }
        await updateCartInDatabase(thunkAPI.getState().cartReducer.carts, user);
    }
);

//increase item count to carts
export const increaseItemToCart = createAsyncThunk("carts/increaseItem",
    async ({ id, user }, thunkAPI) => {
        thunkAPI.dispatch(increaseItem(id));
        console.log(user);
        await updateCartInDatabase(thunkAPI.getState().cartReducer.carts, user);
    }
)

//decrease item count to carts
export const decreaseItemToCart = createAsyncThunk("carts/decreaseItem",
    async ({ id, user }, thunkAPI) => {
        thunkAPI.dispatch(decreaseItem(id));
        await updateCartInDatabase(thunkAPI.getState().cartReducer.carts, user);
    }
)

//delete item from cart
export const deleteItemFromCart = createAsyncThunk("orders/deleteItem",
    async ({ id, user }, thunkAPI) => {
        thunkAPI.dispatch(deleteItem(id));
        await updateCartInDatabase(thunkAPI.getState().cartReducer.carts, user);
    }
)

//upadate item to database also
export const updateCartInDatabaseThunk = createAsyncThunk("carts/updateCartInDatabase",
    async (_, thunkAPI) => {
        const { currentUser } = useSelector(authSelector);
        const updatedCarts = thunkAPI.getState().cartReducer.carts;
        await updateCartInDatabase(updatedCarts, currentUser);
    }
);

//setting for database to update function
async function updateCartInDatabase(updatedCarts, currentUser) {
    const User = deserializeUser(currentUser);
    console.log(User.user.uid);
    const users = collection(db, "users");
    const querySnapshot = await getDocs(users);
    querySnapshot.forEach(async (users) => {
        const userId = User.user.uid;
        const userRef = doc(db, "users", userId);

        await updateDoc(userRef, {
            carts: updatedCarts,
        });
    });
}

//Reducer
const cartSlice = createSlice({
    name: "carts",
    initialState: INITIAL_STATE,
    reducers: {
        setCart: (state, action) => {
            state.carts = action.payload;
        },
        newAddToCart: (state, action) => {
            const item = action.payload
            const newItem = { ...item, count: 1 };
            state.carts.push(newItem);
        },
        increaseItem: (state, action) => {
            const id = action.payload;
            const IncreaseCountInCart = state.carts.find((item) => item.id === id);
            if (IncreaseCountInCart) {
                IncreaseCountInCart.count += 1;
            }
        },
        decreaseItem: (state, action) => {
            const id = action.payload
            const DecreaseCountInCart = state.carts.find((item) => item.id === id);
            if (DecreaseCountInCart) {
                DecreaseCountInCart.count -= 1;
                if (DecreaseCountInCart.count === 0) {
                    state.carts.splice(DecreaseCountInCart);
                }
            }
        },
        deleteItem: (state, action) => {
            const id = action.payload;
            const items = state.carts.filter((i) => i.id !== id);
            state.carts = items;
        }
    }
})
//export reducer
export const cartReducer = cartSlice.reducer;
//export actions
export const { newAddToCart, increaseItem, decreaseItem, deleteItem, setCart } = cartSlice.actions;
//export selector(states)
export const cartSelector = (state) => state.cartReducer;
