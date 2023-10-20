import { useDispatch, useSelector } from "react-redux"
import { contactSelector } from "../Redux/contactReducer";

export const Add = () => {
    const dispatch = useDispatch();
    const { contacts } = useSelector(contactSelector)
    return (
        <>
        </>
    )
}