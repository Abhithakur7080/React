//GETTING STYLES
import styles from "./List.module.css"
//GETTING ROUTE COMPONENT
import { NavLink } from "react-router-dom";
import { contactSelector, DeleteContact } from "../../Redux/contactReducer"
import { useDispatch, useSelector } from "react-redux"

export const List = () => {
    const { isLoading, error, contacts } = useSelector(contactSelector);
    const dispatch = useDispatch();
    if(isLoading) {
        return <div className="message">Loading...</div>
    }
    if(error) {
        return <div className="message">{error}</div>
    }

    const deleteContact = (id) => {
        dispatch(DeleteContact(id));
    }

    return (
        <>
        (<div className={styles.main}>
            <div className={styles.List}>
                {contacts.map((user) => (
                <div className={styles.listCont} key={user.id}>
                    
                    <div className={styles.info}>
                        <h3 className={styles.name}>{user.name}</h3>
                        <h3>{user.email}</h3>
                        <h3>{user.phone}</h3>
                    </div>
                    <div className={styles.btnCont}>
                        <NavLink to={`/update/${user.id}`} >
                            <button className={styles.update} >Update</button>
                        </NavLink>
                        <button className={styles.delete} onClick={() => deleteContact(user.id)}>Delete</button>
                    </div>
                </div>
                ))}
            </div>
            
        </div>)
        </>
    )
}