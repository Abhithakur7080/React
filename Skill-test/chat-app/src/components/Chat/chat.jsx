import { useContext } from "react"
import { ChatContext } from "../../context/chatContext"
import { Messages } from "../Messages/messages";
import { Input } from "../Input/input";

export const Chat = () => {
    const { data } = useContext(ChatContext);
    return(
        <div className="chat">
            <div className="top">
                <span>{data.user?.displayName}</span>
                <div className="chatIcons">
                    <i className="fa-solid fa-plus"></i>
                    <i className="fa-solid fa-camera"></i>
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>
            
            <Messages/>
            <Input/>
        </div>
    )
}