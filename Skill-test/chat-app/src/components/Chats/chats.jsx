import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/authContext";
import { ChatContext } from "../../context/chatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebaseinit";

export const Chats = () => {
    const [chats, setChats] = useState([]);
    const { currentUser } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                setChats(doc.data());
            })
            return () => {
                unsub();
            }
        }
        currentUser.uid && getChats();
    }, [currentUser.uid]);

    const handleSelect = (userInfo) => {
        dispatch({type: "CHANGE_USER", payload: userInfo});
    }
    return (
        <div className="chats">
            {/* {Object.entries(chats)
            ?.sort((a, b) => b[1].date - a[1].date)
            .map((chat) => {
                return (
                    <>
                    </>
                )
            })
            } */}
        </div>
    )
}