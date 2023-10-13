//GETTIG PAGES COMPONENTS
import { Chats } from "../Chats/chats"
import { Navbar } from "../Navbar/navbar"
import { Search } from "../Search/search"

export const Sidebar = () => {
    //render all components here...
    return(
        <div className="sidebar">
            <Navbar/>
            <Search/>
            <Chats/>
        </div>
    )
}