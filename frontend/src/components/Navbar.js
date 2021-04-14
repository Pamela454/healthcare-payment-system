import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Logout from './registrations/Logout'


const NavBar = (currentAccount) => {
	return (
		<Navbar bg="light" expand="sm" fixed="top">
         <Navbar.Brand href="/">
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

              {!currentAccount ? (
                <Nav className="ml-auto">
                 <Logout to="/logout">Logout</Logout>
                </Nav> 
              ):(
                <Nav className="ml-auto">
                 <button class="btn btn-outline-primary">
                   <Link to="/api/v1/signup">Signup</Link>
                 </button>
                 <br></br>
                </Nav>
             )}

            </Navbar.Collapse>
           </Navbar>
    )
}

export default NavBar;

