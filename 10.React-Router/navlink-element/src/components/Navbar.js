import { NavLink, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3176/3176363.png"
          alt="logo"
          onClick={() => window.location.replace("/")}
        />

        <nav>
          <NavLink style={({isActive}) => isActive?{backgroundColor: "#e1d1f976", backgroundColor: "#e1d1f976", border: "2px solid #fff"}: undefined} to="/">Home</NavLink>
          <NavLink style={({isActive}) => isActive?{backgroundColor: "#e1d1f976", backgroundColor: "#e1d1f976", border: "2px solid #fff"}: undefined} to="/list">List</NavLink>
          <NavLink style={({isActive}) => isActive?{backgroundColor: "#e1d1f976", backgroundColor: "#e1d1f976", border: "2px solid #fff"}: undefined} to="/contact">Contact</NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};
