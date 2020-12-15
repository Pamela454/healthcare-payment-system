import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar'
//import { Link } from "react-router-dom";
//import Login from "./registrations/Login";

class Navbar extends Component {
  render() {
    return(
        <nav class="navbar navbar-dark bg-primary">
            <div className="row col-12 d-flex justify-content-center text-white">
            <span className="h3">Register</span>
            </div>
        </nav>
    )
  }
}
 
export default Navbar;