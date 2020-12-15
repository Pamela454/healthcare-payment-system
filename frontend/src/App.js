import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom'
//import axios from 'axios'
//import {BrowserRouter, Switch, Route, useLocation /*, withRouter */} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Login from './components/registrations/Login'
//import Signup from './components/registrations/Signup'


class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
      loginForm: {
        name: "",
        password: ""
      }
    }
  }


  handleLoginFormChange = event => {
   const {name, value } = event.target
    this.setState({
      loginForm: {
        ...this.state.loginForm,
        [name]: value 
      }
    })
  };

  handleLoginFormSubmit = event => {
    event.preventDefault() //state contains most up to date form data
    const userInfo = this.state.loginForm
    const headers = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: userInfo
      })
    }
    fetch("http://localhost:3001/api/v1/login", headers)
    .then(r => r.json())
    .then(userJSON => { 
      if (userJSON.error) {
        alert("invalid credentials") 
      } else {
        this.setState({
          currentUser: userJSON.account
        })
      }
      })
    .catch(console.log)
  }

  //handleErrors = () => {
    //return (
      //<div>
        //<ul>
        //{this.state.errors.map(error => {
        //return <li key={error}>{error}</li>
          //})}
        //</ul>
      //</div>
    //)
  //};

//handleSubmit = (data) => {
  //this.setState({
    //account: data.account 
  //})
  //this.props.history.push(`/accounts/${this.props.account.id}`);
//};


  render() {
    return (
      <div className="App">
        <Navbar/>
        <Login
          handleLoginFormChange={this.handleLoginFormChange}
          handleLoginFormSubmit={this.handleLoginFormSubmit}
          name={this.state.loginForm.name}
          password={this.state.loginForm.password}
          />
      </div>
    );
  }
}

export default App; // only one thing to export can use default