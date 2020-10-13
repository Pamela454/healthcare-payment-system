import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      password: '',
      errors: ''
     };
  }
  
  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault()
  };

  render() {
    const {name, password} = this.statereturn (
      <div>
        <h1>Log In</h1>        
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="name"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />         
          <button placeholder="submit" type="submit">
            Log In
          </button>          
          <div>
            or <Link to='/signup'>sign up</Link>
          </div>
          
         </form>
      </div>
    );
  }
}

export default Login;