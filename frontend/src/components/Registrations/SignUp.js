import React, { Component } from 'react';
import axios from 'axios'
//import {Link} from 'react-router-dom'

class Signup extends Component {  

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
    const {name, password} = this.state
    let account = {
      name: name,
      password: password,
    }

  axios.post('http://localhost:3001/api/v1/signup', {account}, {withCredentials: true})
    .then(response => {
      if (response.data.status === 'created') {
        this.props.handleLogin(response.data)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
};

redirect = () => {
    this.props.history.push('/')
  }

handleErrors = () => {
    return (
      <div>
        <ul>{this.state.errors.map((error) => {
          return <li>key={error}>{error}</li>
        })}
        </ul> 
      </div>
    )
  };

render() {
    const {name, password} = this.state
return (
      <div>
        <h1>Sign Up</h1>        
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
            Sign Up
          </button>
      
        </form>
      </div>
    );
  }
}
export default Signup;