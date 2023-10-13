//GETTING COMPONENTS FROM REACT
import { useContext, useEffect, useState } from "react"

//GETTING COMPONENT FROM AUTH CONTEXT
import { AuthContext } from "../../context/authContext";

//GETTING COMPONENT FROM CHAT CONTEXT
import { ChatContext } from "../../context/chatContext";

//GETTING COMPONENT FROM FIRESTORE
import { doc, onSnapshot } from "firebase/firestore";

//GETTING COMPONENT FROM FIREBASE FILE
import { db } from "../../firebaseinit";

export const Chats = () => {

    //making of states
    const [chats, setChats] = useState([]);

    // using current info from auth context
    const { currentUser } = useContext(AuthContext);

    // using dispatch to set chat data
    const { dispatch } = useContext(ChatContext);

    //using react component to fetch all the user chats data from firebase database
    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                console.log(doc.data());
                setChats(doc.data());
            })
            return () => {
                unsub();
            }
        }
        currentUser.uid && getChats();
    }, [currentUser.uid]);


    //on select function
    const handleSelect = (userInfo) => {
        dispatch({ type: "CHANGE_USER", payload: userInfo });
        console.log(userInfo);
    }

    return (
        <div className="chats">
            {Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date)
                .map((chat) => {
                    return (
                        <div
                            className="userChat"
                            key={chat[0]}
                            onClick={() => handleSelect(chat[1].userInfo)}
                        >
                            <img src={chat[1].userInfo.photoURL} alt="userChatImage" />
                            <div className="userChatInfo">
                                <span>{chat[1].userInfo.displayName}</span>
                                <p className="last-message">{chat[1].lastMessage?.text}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}