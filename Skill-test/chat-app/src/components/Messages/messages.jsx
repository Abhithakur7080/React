import { useContext, useEffect, useState } from "react"
import { ChatContext } from "../../context/chatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebaseinit";
import { Message } from "../Message/message";

export const Messages = () => {
    const [messages, setMessages] = useState([]);
    const { data } = useContext(ChatContext);

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
            {messages.map(() => {
                return <Message message={messages} key={messages.id}/>
            })}
        </div>
    )
}