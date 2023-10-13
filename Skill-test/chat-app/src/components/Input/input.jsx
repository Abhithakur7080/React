//GETTING REACT COMPONENTS
import { useContext, useState } from "react"

//GETTING COMPONENTS FROM AUTH CONTEXT
import { AuthContext } from "../../context/authContext";

//GETTING COMPONENTS FROM CHAT CONTEXT
import { ChatContext } from "../../context/chatContext";

//GETTING COMPONENTS FROM STORAGE
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

//GETTING COMPONENTS OF FIREBASE FILE
import { db, storage } from "../../firebaseinit";

//GETTING COMPONENT OF UUID PACKAGE
import { v4 as uuid } from "uuid";

//GETTING FIRESTORE COMPONENTS
import {
    Timestamp,
    arrayUnion,
    doc,
    serverTimestamp,
    updateDoc
} from "firebase/firestore";

//GETTING IMAGES
import attach from "../../images/attach.png"
import imag from "../../images/img.png"

export const Input = () => {

    //making states
    const [text, setText] = useState("");
    const [img, setImg] = useState(null);

    // using current info from auth context
    const { currentUser } = useContext(AuthContext);

    //getting data of chat from context
    const { data } = useContext(ChatContext);

    //on send function
    const handleSend = async () => {
        if(img) {
            const storageRef = ref(storage, uuid());

            const uploadTask = uploadBytesResumable(storageRef, img);

            uploadTask.on(
                (error)=> {
                    console.log("image upload error", error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref)
                    .then(async (downloadURL) => {
                        await updateDoc(doc(db, "chats", data.chatId), {
                            messages: arrayUnion({
                                id: uuid(),
                                text,
                                senderId: currentUser.uid,
                                date: Timestamp.now(),
                                img: downloadURL
                            })
                        })
                    })
                }
            )
        }
        else{
            //set data to firestore
            await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    date: Timestamp.now(),
                })
            }) 
        };
        //set data to firestore
        await updateDoc(doc(db, "userChats", currentUser.uid), {
            [data.chatId + ".lastMessage"] : {
                text
            },
            [data.chatId + ".date"] : serverTimestamp(),
        });
        //set data to firestore
        await updateDoc(doc(db, "userChats", data.user.uid), {
            [data.chatId + ".lastMessage"] : {
                text
            },
            [data.chatId + ".date"] : serverTimestamp(),
        });

        setText("");
        setImg(null)
    }

    return (
        <div className="input">
            <input
                type="text"
                placeholder="Enter your Message..."
                onChange={(e) => setText(e.target.value)}
                value={text}

            />
            <div className="send">
                <img src={imag} alt="img+"/>
                <input
                    type="file"
                    style={{display: "none"}}
                    id="file"
                    onChange={(e) => setImg(e.target.files[0])}
                />
                <label htmlFor="file">
                    <img src={attach} alt="attach-file"/>
                </label>
                <button onClick={handleSend}><i className="fa-sharp fa-solid fa-paper-plane"></i></button>
            </div>
        </div>
    )
}