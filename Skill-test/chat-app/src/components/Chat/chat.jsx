//GETTING REACT COMPONENTS
import { useContext } from "react"

//GETTING COMPONENTS FROM CHAT CONTEXT
import { ChatContext } from "../../context/chatContext"

//GETTING PAGE COMPONENTS
import { Messages } from "../Messages/messages";
import { Input } from "../Input/input";

export const Chat = () => {

    //getting data of chat from context
    const { data } = useContext(ChatContext);
    
    return(
        <div className="chat">
            <div className="top">
                <span>{data.user?.displayName}</span>
                <div className="chatIcons">
                    <i className="fa-solid fa-user-plus"></i>
                    <i className="fa-solid fa-camera"></i>
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>
            
            <Messages/>
            <Input/>
        </div>
    )
}