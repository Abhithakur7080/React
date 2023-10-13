//GETTING REACT COMPONENTS
import { useContext, useEffect, useState } from "react"

//GETTING CONTEXT COMPONENTS
import { ChatContext } from "../../context/chatContext";

//GETTING FIREBASE COMPONENTS
import { doc, onSnapshot } from "firebase/firestore";

//GETTING COMPONENTS FROM FIREBASE FILE
import { db } from "../../firebaseinit";

//GETTING MESSAGE PAGE COMPONENT
import { Message } from "../Message/message";

export const Messages = () => {

    //making of state
    const [messages, setMessages] = useState([]);

    //getting data of chat from context
    const { data } = useContext(ChatContext);

    //using react component to fetch all the chats data from firebase database
    useEffect(() => {
        const unsub =onSnapshot(doc(db, "chats", data.chatId), (doc) => {
            doc.exists() && setMessages(doc.data().messages);
        });
        return () => {
            unsub();
        }
    }, [data.chatId]);

    return (
        <div className="messages">
            {messages.map((message) => {
                return <Message message={message} key={message.id}/>
            })}
        </div>
    )
}