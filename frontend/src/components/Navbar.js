import React from "react";
import { Navbar } from "react-bootstrap";
//import { Route } from "react-router-dom";
import { logout } from "../actions/currentAccount.js";
import { connect } from "react-redux";
import { Link } from "react-router-dom"; //adds styling to the link
//import Logout from "./registrations/Logout";

const NavBar = ({ currentAccount, logout }) => {
  return (
    <div class="container-fluid">
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="/login">Payment Application</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {currentAccount ? (
            <button class="btn btn-outline-primary" onClick={logout}>
              <Link to="/logout">Logout</Link>
            </button>
          ) : (
            <button class="btn btn-outline-primary">
              <Link to="/api/v1/signup">Signup</Link>
            </button>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default connect(null, { logout })(NavBar);
