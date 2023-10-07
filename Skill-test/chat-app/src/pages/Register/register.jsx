import { useState } from "react";
import logo from "../../icon.png";
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../firebaseinit";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export const Register = () => {
    const [error, setError] = useState(false);
    // const navigate = useNavigate();

    //handle on submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        const file = e.target[3].files[0];

        // console.log(name);
        // console.log(email);
        // console.log(password);

        try {
            const response = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            //on firestore storage handle to add chats and medias
            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                //handle successful upload
                (error) => {
                    setError(true);
                },
                // storing data to storage
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        //1st update
                        await updateProfile(response.user, {
                            name,
                            photoURL: downloadURL
                        });
                        //2nd set to db
                        await setDoc(doc(db, "users", response.user.uid), {
                            name,
                            email,
                            photoURL: downloadURL
                        });
                        //3rd also create same id to usercart collection
                        await setDoc(doc(db, "userFriends", response.user.uid), {});
                        toast.success("New User Created");
                        // navigate('/');
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
                    <div className="photo">
                        <h4>Select Profile photo</h4>
                        <input type="file" id="file-input" />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}