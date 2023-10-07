//GETTING @reactjs/toolkit COMPONENTS
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//GETTING TOAST
import { toast } from 'react-toastify';

//GETTING ACTION FROM CART REDUCER
import { setCart } from "./cartReducer";

//GETTING COMPONENTS FROM FIREBASE FILE
import { db } from "../../firebaseinit";

//GETTING COMPONENTS FROM FIREBASE/FIRESTORE
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

//MAKING INITIAL STATE
const INITIAL_STATE = {
    orders: []
}

//purchase
export const purchase = createAsyncThunk("orders/purchase",
    async ({carts, orders}, thunkAPI) => {
        //setting date for order
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const date = currentDate.getDate();

        const orderDate = `${date.toString()}/${month.toString()}/${year.toString()}`;

        //make order in object
        const newOrder = { date: orderDate, order: carts };
        //set order in order array
        thunkAPI.dispatch(checkOut(newOrder));
        toast.success("Item Purchased");

        //set updated order to database also
        const updatedOrders = [...orders, newOrder];
        const users = collection(db, "users");
        const querySnapshot = await getDocs(users);
        querySnapshot.forEach(async (user) => {
            const userId = user.id;
            const useRef = doc(db, "users", userId);
            await updateDoc(useRef, {
                orders: updatedOrders,
                carts: []
            });
        })

        //set cart empty after order purchased
        thunkAPI.dispatch(setCart([]));
    }
)
// Reducer
const orderSlice = createSlice({
    name: "orders",
    initialState: INITIAL_STATE,
    reducers: {
        setOrders: (state, action) => {
            state.orders = action.payload
        },
        checkOut: (state, action) => {
            state.orders.push(action.payload);
        }
    }
})
//export reducer
export const orderReducer = orderSlice.reducer;
//export actions
export const { checkOut, setOrders } = orderSlice.actions;
//export selector(states)
export const orderSelector = (state) => state.orderReducer;