//import React from 'react';
import React, { useState } from 'react';
//import { compose } from 'redux';
import { login } from "../../actions/currentAccount";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentAccount } from "../../actions/currentAccount";

//useForm hook? 
//value of form input is determined by the state, state dictated by input field values
// only use hooks with function components 
const Login = ({ login, name, password, setCurrentAccount, history }) => {
  const [form, setState] = useState({
    name: '',
    password: ''
  });

  const handleLoginFormChange = event => {
   setState({
    ...form,
    [event.target.name]: event.target.value, 
    [event.target.password]: event.target.value 
   });
  }

const handleLoginFormSubmit = event => {
    event.preventDefault() //state contains most up to date form data. prevent page refresh 
    login(form, history); 
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
const mapStateToProps = state => {
  return {
    form: state.form 
  };
};


export default withRouter(connect(mapStateToProps, { login, setCurrentAccount } )(Login));