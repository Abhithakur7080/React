//GETTING PAGES COMPONENTS
import { Chat } from "../../components/Chat/chat";
import { Sidebar } from "../../components/Sidebar/sidebar";

export const Home = () => {
    //render all imported components here
    return (
        <div className="home">
            <Sidebar/>
            <Chat/>
        </div>
    )
}