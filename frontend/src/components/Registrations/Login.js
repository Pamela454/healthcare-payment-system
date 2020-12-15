import React from 'react';
//import axios from 'axios'
import {Link} from 'react-router-dom'
import { login } from "../../actions/accountlogin";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

//could be combined with signup
//convert to pure component? 
//value of form input is determined by the state, state dictated by input field values
const Login = ({ handleLoginFormChange, handleChange, handleLoginFormSubmit, name, password }) => {
  return (
      <div className="Login">
        <h1>Log In</h1>
        <form onSubmit={handleLoginFormSubmit}>
          <input
            placeholder="name"
            type="text"
            name="name"
            value={name}
            onChange={handleLoginFormChange}
          /><br/>
        <input
            placeholder="password"
            type="password" //can't see type
            name="password"
            value={password}
            onChange={handleLoginFormChange}
          /><br/>          
        <button placeholder="submit" type="submit">
            Log In
          </button>          
          <div>
            or <Link to="signup">Sign Up</Link>
          </div>
          
          </form>
          <div>
        </div>
      </div>
  );

}

//function NoMatch() {
  //let location = useLocation();

  //return (
    //<div>
      //<h3>
        //No match for <code>{location.pathname}</code>
      //</h3>
    //</div>
  //);
//}

const mapDispatchToProps = (dispatch) => {
  return {
    accountlogin: (account) => {
      dispatch({
        type: "SET_CURRENT_ACCOUNT",
        account: account,
      });
    },

    login: (credentials, history) => dispatch(login(credentials, history)),
  };
};



export default withRouter(connect(null, mapDispatchToProps)(Login));