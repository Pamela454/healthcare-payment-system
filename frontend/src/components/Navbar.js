import React from "react";
//import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from "./registrations/Logout";

const Navbar = (props, currentAccount) => {
    return (
        <div className="Navbar">
            { currentAccount || this.props.location.pathname === "/signup" ? null : <NavLink exact activeClassName="active" to="/signup" >Signup</NavLink> }
            { currentAccount ? <Logout/> : null }
        </div>
    )
}
 

export default (Navbar);