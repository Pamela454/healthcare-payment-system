import React from "react";
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
//import { Button } from 'react-bootstrap'
import Logout from "./registrations/Logout";

const Navbar = (props) => {
    return (
        <div className="Navbar">
            { props.account ? null : <NavLink exact activeClassName="active" to="/signup" >Signup</NavLink> }
            { props.account ? <Logout/> : null }
        </div>
    )
}
 

const mapStateToProps = ({ currentAccount}) => {
  return {
    //currentAccount: this.props
  }
}

export default connect(mapStateToProps)(Navbar);