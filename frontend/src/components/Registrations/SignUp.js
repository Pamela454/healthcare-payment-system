import React, { useState } from 'react';
import { connect } from "react-redux";
import { signup } from "../../actions/currentAccount";


const Signup = ({ name, password, status, signup, history }) => {

  const [signupFormData, setForm] = useState({
    name: '',
    password: '',
    status: ''
  });


  const handleSignupFormChange = (event, target) => {
    setForm({
      ...signupFormData,
      [target]: event.target.value,
    });
  };


  const handleSignupFormSubmit = (event) => {
    event.preventDefault()
    signup(signupFormData, history);
  };

  return (
    <div>
      <h1>Sign Up</h1>         
        <form onSubmit={handleSignupFormSubmit}>
          <input
            placeholder="name"
            type="text"
            name="name"
            value={signupFormData.name}
            onChange={(event)=> handleSignupFormChange(event, "name")}
          /><br/>
          <input 
            placeholder="password"
            type="password"
            name="password"
            value={signupFormData.password}
            onChange={(event)=> handleSignupFormChange(event, "password")}
          /><br/>  
         <label>
           <select value={signupFormData.status}
           onChange={(event)=> handleSignupFormChange(event, "status")}>
           <option value="patient">Patient</option>
           <option value="admin">Administrator</option>
           </select>
          </label>
          <button placeholder="submit" type="submit">
            Sign Up
          </button>
        </form>
      </div>
  );
};

const mapStateToProps = state => { //what portion of state to provide to props 
  return {
    signupFormData: state.signupForm 
  };
};


export default connect(mapStateToProps, { signup })(Signup);