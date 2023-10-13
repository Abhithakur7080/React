//GETTING REACT COMPONENTS
import { useContext, useEffect, useRef } from "react"

//GETTING COMPONENTS FROM AUTH CONTEXT
import { AuthContext } from "../../context/authContext"

//GETTING COMPONENTS FROM CHAT CONTEXT
import { ChatContext } from "../../context/chatContext";

export const Message = ({message}) => {

    // using current info from auth context
    const { currentUser } = useContext(AuthContext);

    //getting data of chat from context
    const { data } = useContext(ChatContext);

    //use refernce
    const ref = useRef()

    //using react component to fetch all
    useEffect(() => {
        ref.currentUser?.scrollIntoView({behaviour : "smooth"});
    }, [message]);
    return (
        <div ref={ref}
            className={`message ${message.senderId === currentUser.uid && "owner"}`}>
                <div className="messageInfo">
                    <img src={
                        message.senderId === currentUser.uid
                        ? currentUser.photoURL
                        : data.user.photoURL
                    }
                    alt="imag"
                    className="userImg"
                    />
                    <div className="messageContent">
                        <span>just now</span>
                        <p>{message.text}</p>
                        {console.log(message.img)}
                        {message.img && <img src={message.img} alt="messageImage"/>}
                    </div>
                </div>
        </div>
    )
}