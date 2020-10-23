import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Login from "./registrations/Login";
import Signup from "./registrations/Signup";

const Navbar = () => {
  //const [isOpen, setOpen] = useState(false);
  return ( 
  	<nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
      	<div className="navbar-start">
            <NavLink className="navbar-item" activeClassName="is-active" to="login">
            </NavLink>
      </div>
     </div>
    </nav>
  );
 };
 
 export default Navbar;