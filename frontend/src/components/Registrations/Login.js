import React from 'react';
import React, { useState } from "react";
import { login } from "../../actions/setCurrentAccount";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentAccount } from "../../actions/setCurrentAccount";

//value of form input is determined by the state, state dictated by input field values
// only use hooks with function components 
const Login = ({ login, name, password, setCurrentAccount }) => {
  const [form, setState] = React.useState({
    name: '',
    password: ''
  });

  const handleLoginFormChange = event => {
   setState({
    ...form,
    [e.target.name]: e.target.value 
   });
  }

const handleLoginFormSubmit = event => {
    event.preventDefault() //state contains most up to date form data. prevent page refresh 
    login(form); 
  }


  return (
      <div className="Login">
        <h1>Log In</h1>
        <form onSubmit={handleLoginFormSubmit}>
          <input
            placeholder="name"
            type="text"
            name="name"
            autoComplete="on"
            value={form.name}
            onChange={handleLoginFormChange}
          /><br/>
        <input
            placeholder="password"
            type="password" //can't see type
            name="password"
            autoComplete="on"
            value={form.password}
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