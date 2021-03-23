import React from 'react';
import {Link} from 'react-router-dom'
import { logout } from "../actions/currentAccount.js"


const Home = (props) => {
	const handleClick = () => {
		logout();
	}
  return (
    <div>
      <Link to='/login'>Log In</Link>
      <br></br>
      <Link to='/signup'>Sign Up</Link>
      {
      	props.loggedInStatus ? <Link to='/logout' onClick= {handleClick}>Log Out</Link> :
      	null
      }
    </div>
  )
};
   

export default Home;
