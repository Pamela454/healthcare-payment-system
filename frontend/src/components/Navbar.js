import React from "react";
import { Navbar } from "react-bootstrap";
//import { Route } from "react-router-dom";
import { logout } from "../actions/currentAccount.js";
import { connect } from "react-redux";
import { Link } from "react-router-dom"; //adds styling to the link
//import Logout from "./registrations/Logout";

const NavBar = ({ location, currentAccount, logout }) => {
  console.log(location);
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
          ) : null}
          {location.pathname === "/api/v1/login" ? (
            <button class="btn btn-outline-primary">
              <Link to="/api/v1/signup">Signup</Link>
            </button>
          ) : null}
          {location.pathname === "/api/v1/signup" ? (
            <button class="btn btn-outline-primary" onClick={logout}>
              <Link to="/api/v1/login">Login</Link>
            </button>
          ) : null}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default connect(null, { logout })(NavBar);
