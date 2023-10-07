import { Friends } from "../Friends/friends"
import { Navbar } from "../Navbar/navbar"
import { Search } from "../Search/search"

export const Sidebar = () => {
    return(
        <div className="sidebar">
            <Navbar/>
            <Search/>
            <Friends/>
        </div>
    )
}