import { NavLink, Outlet } from "react-router-dom";
const Navbar = ({setPage}) => {
    return (
        <>
        <div className="nav">
            {/* <h4 onClick={() => setPage("home")}>HOME</h4>
            <h4 onClick={() => setPage("about")}>ABOUT</h4>
            <h4 onClick={() => setPage("items")}>ITEMS</h4> */}


            <NavLink style={({isActive})=> isActive?{backgroundColor:"blue", color: "white"}: undefined} to="/">
                <h4>Home</h4>
            </NavLink>

            <NavLink style={({isActive})=> isActive?{backgroundColor:"blue", color: "white"}: undefined} to="/about">
                <h4>About</h4>
            </NavLink>

            <NavLink style={({isActive})=> isActive?{backgroundColor:"blue", color: "white"}: undefined} to="/items">
                <h4>Items</h4>
            </NavLink>

        </div>
        <Outlet/>
        </>
    )
}
export default Navbar;