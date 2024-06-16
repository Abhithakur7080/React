import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Navbar = () => {
    const navlinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "underline",
            color: isActive ? "red" : "inherit",
        }
    }
    const auth = useAuth()
  return (
    <nav>
      {/* <Link to={'/'}>Home</Link>
        <Link to={'about'}>About</Link>
        <Link to={'contact'}>Contact</Link> */}

      {/* add a active class on active link */}
      {/* <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'about'}>About</NavLink>
        <NavLink to={'contact'}>Contact</NavLink> */}

      <NavLink style={navlinkStyles} to={"/"}>Home</NavLink>
      <NavLink style={navlinkStyles} to={"/about"}>About</NavLink>
      <NavLink style={navlinkStyles} to={"/contact"}>Contact</NavLink>
      <NavLink style={navlinkStyles} to={"/users"}>Users</NavLink>
      <NavLink style={navlinkStyles} to={"/products"}>Products</NavLink>
      <NavLink style={navlinkStyles} to={"/profile"}>Profile</NavLink>
      {
        !auth.user && <NavLink style={navlinkStyles} to={"/login"}>Login</NavLink>
      }
    </nav>
  );
};

export default Navbar;
