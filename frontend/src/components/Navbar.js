import React, { Component } from "react";
import { Link } from 'react-router-dom';
//import { connect } from 'react-redux'
//import { NavLink } from 'react-router-dom'
//import Login from "./registrations/Login";

class Navbar extends Component {
  render() {
    return(
        <nav className="navbar navbar-dark bg-primary">
            <div className="row col-12 d-flex justify-content-center text-white">
            <Link to='/signup' className='App-Link'>Signup</Link> 
            </div>
        </nav>
    )
  }
}
 
export default Navbar;