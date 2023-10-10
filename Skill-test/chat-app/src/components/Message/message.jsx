import { useContext, useEffect, useRef } from "react"
import { AuthContext } from "../../context/authContext"
import { ChatContext } from "../../context/chatContext";

export const Message = ({message}) => {
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const ref = useRef()

    useEffect(() => {
        ref.currentUser?.scrollIntoView({behaviour : "smooth"});
    }, [message]);
    return (
        <div ref={ref}>
        </div>
    )
}