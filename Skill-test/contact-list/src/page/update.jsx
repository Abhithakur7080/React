import { UpdateContact } from "../Redux/contactReducer"
import { Navbar } from "../components/Navbar/navbar"
import { UpdateForm } from "../components/UpdateForm/updateForm"

export const Update = () => {
    return (
        <>
            <Navbar
                page="Home"
                path="/"
                title="Update Contact"
                />
            <UpdateForm/>
        </>
    )
}