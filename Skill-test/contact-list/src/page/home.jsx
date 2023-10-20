import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { fetchStart, getContacts } from "../Redux/contactReducer";
import { Navbar } from "../components/Navbar/navbar";
import { List } from "../components/List/List";

export const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchStart());
        dispatch(getContacts());
    }, []);

    return(
        <>
            <Navbar
                page="Add Contact"
                path="/add"
                title="Home"
            />
            <List/>
        </>
    )
}