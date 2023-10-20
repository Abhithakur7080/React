//GETTING STYLES
import { useEffect, useState } from "react"
import styles from "./updateForm.module.css"
//GETTING ROUTE COMPONENT
import { NavLink, useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { UpdateContact, contactSelector } from "../../Redux/contactReducer";

export const UpdateForm = ({ updateAlbum, updateAlbumInList }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const { id } = useParams();

    const { contacts } = useSelector(contactSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentContact = contacts.find((user) => user.id === parseInt(id));

    useEffect(() => {
        if(currentContact){
            setName(currentContact.name);
            setEmail(currentContact.email);
            setNumber(currentContact.phone);
        }
    }, [currentContact])

    console.log(number);

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkEmail = contacts.find((user) => user.id !== parseInt(id) && user.email === email);
        const checkNumber = contacts.find((user) => user.id !== parseInt(id) && user.number === number);

        if(!email || !number || !name){
            alert("please fill all fields")
        }
        if(checkEmail){
            alert("this email already exists")
        }
        if(checkNumber){
            alert("this number already exists")
        }

        const data = {
            id: parseInt(id),
            name,
            email,
            number
        }
        console.log(data);
        dispatch(UpdateContact(data));
        navigate("/")
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.albumForm}>
                <h4>
                    {name}
                </h4>
                <div className={styles.inputCont}>
                    <label htmlFor="title">Enter name</label>
                    <input type="text" id="title" placeholder="Enter your album title here.."
                    value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className={styles.inputCont}>
                    <label htmlFor="userId">Enter email</label>
                    <input type="email" id="userId" placeholder="Enter your user Id here..." value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className={styles.inputCont}>
                    <label htmlFor="muserId">Enter number</label>
                    <input type="number" id="nuserId" placeholder="Enter your user Id here..." 
                    value={parseInt(number)} onChange={(e) => setNumber(e.target.value)}/>
                </div>
                <NavLink to="/" className={styles.btnCont}>
                    <button onClick={handleSubmit}>Save</button>
                </NavLink>
            </div>
        </div>
    )
}