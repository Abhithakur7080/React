import { Chat } from "../../components/Chat/chat";
import { Sidebar } from "../../components/Sidebar/sidebar";
export const Home = () => {
    return (
        <div className="home">
            <Sidebar/>
            <Chat/>
        </div>
    )
}