//GETTING REACT COMPONENTS
import { useState } from "react";

//GETTING ROUTING COMPONENTS
import { useNavigate, NavLink } from 'react-router-dom'

//GETTING FIREBASE AUTH COMPONENTS
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

//GETTING COMPONENTS FROM FIREBASE FILE
import { auth, db, storage } from "../../firebaseinit";

//GETTING FIREBASE STORAGE FILE
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

//GETTING FIRESTORE COMPONENTS
import { doc, setDoc } from "firebase/firestore";

//GETTING TOAST
import { toast } from "react-toastify";

//GETTING IMAGES
import profile from "../../images/profile.png";
import logo from "../../images/icon.png";

export const Register = () => {

    //making of state
    const [error, setError] = useState(false);

    //initialize navigate components
    const navigate = useNavigate();

    //handle on submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        const file = e.target[3].files[0];
        console.log(auth);
        console.log(email);
        console.log(password);


        try {
            const response = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log("hello");
            //on firestore storage handle to add chats and medias
            const storageRef = ref(storage, displayName);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                //handle successful upload
                (error) => {
                },
                // storing data to storage
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        //1st update
                        await updateProfile(response.user, {
                            displayName,
                            photoURL: downloadURL
                        });
                        //2nd set to db
                        console.log(response);
                        await setDoc(doc(db, "users", response.user.uid), {
                            uid: response.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL
                        });
                        //3rd also create same id to usercart collection
                        await setDoc(doc(db, "userChats", response.user.uid), {});
                        toast.success("New User Created");
                        navigate('/');
                    })
                }
            )
        }
        catch (error) {
            console.log(error);
            toast.error("Please Enter valid Name, Email and Password")
            setError(true);
        }
    }
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <div className="head">
                    <img src={logo} alt="logo" />
                    <span className="title">Chat App</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <span className="header">Register</span>
                    <hr />
                    <input type="name" placeholder="Enter your Name here..." />
                    <input type="email" placeholder="Enter your Email here..." />
                    <input type="password" placeholder="Enter your Password here..." />
                    {/* dummy tag to store medias files and chats */}
                    <input type="file" style={{display: "none"}} id="fileInput" />
                    <label htmlFor="fileInput">
                        <span>Select Profile photo </span>
                        <img src={profile} alt="profilePhoto"/>
                    </label>
                    <button type="submit">Register</button>
                    <h4>Already user? <NavLink to="/login">Login</NavLink> here.</h4>
                </form>
                {error && <span>Something went Wrong!!!</span>}
            </div>
        </div>
    )
}