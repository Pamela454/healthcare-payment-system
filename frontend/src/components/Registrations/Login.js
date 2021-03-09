import React from 'react';
import { login } from "../../actions/setCurrentAccount";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

//could be combined with signup
//convert to pure component? 
//value of form input is determined by the state, state dictated by input field values
const Login = ({ handleLoginFormChange, handleChange, handleLoginFormSubmit, name, password, setCurrentAccount }) => {
  return (
      <div className="Login">
        <h1>Log In</h1>
        <form onSubmit={handleLoginFormSubmit}>
          <input
            placeholder="name"
            type="text"
            name="name"
            autoComplete="on"
            value={name}
            onChange={handleLoginFormChange}
          /><br/>
        <input
            placeholder="password"
            type="password" //can't see type
            name="password"
            autoComplete="on"
            value={password}
            onChange={handleLoginFormChange}
          /><br/>          
        <button placeholder="submit" type="submit">
            Log In
          </button>          
          <div>
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
// persists changes in the state. 
const mapDispatchToProps = (dispatch) => {
  return {  //calls action, reducer and then makes a change to state 
    setCurrentAccount: (account) => {
        dispatch(setCurrentAccount(account))
    },

    //login: (credentials, history) => dispatch(login(credentials, history)),
  };
};


export default connect(null, mapDispatchToProps)(Login);