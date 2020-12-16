import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom'
//import axios from 'axios'
//import {BrowserRouter, Switch, Route, useLocation /*, withRouter */} from 'react-router-dom'
import Departments from './components/Departments'
import Navbar from 'react-bootstrap/Navbar'
import Login from './components/registrations/Login'
import Logout from './components/registrations/Logout'

//import Signup from './components/registrations/Signup'


class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
      loginForm: {
        name: "",
        password: ""
      }, 
    }
  }

  componentDidMount() {
    const token = localStorage.getItem("token")
    if(token) {
      fetch("http://localhost:3001/api/v1/is_logged_in", {
        headers: {
          "Authorization": token
        }
      })
      .then(r => r.json())
      .then(user => {
        if (user.error) {
          alert(user.error)
        } else {
          this.setState({
            currentUser: resp.user 
          })
        }
       })
        .catch(console.log)
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
          currentUser: userJSON
          loginForm: {
            name: "",
            password: ""
          }
        })
      }
      })
    .catch(console.log)
  }

  logout = event => {
    event.preventDefault()
    localStorage.removeItem("token")
    this.setState({
      currentUser: null,
      secrets: []
    })
  }

  //getDepartments = () => {
    //fetch(`http://localhost:3001/api/v1/accounts/${this.state.currentUser.account_id}/departments`)
    //.then(r => r.json())
    //.then(console.log)
    //.then(userJSON => { 
      //if (userJSON.error) {
  //}

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
    const { currentUser } = this.state 
    return (
      <div className="App">
       <h2>{ currentUser ?
        `Logged in as ${currentUser.name}`  :
        "Not logged in" 
      }</h2>
        <Navbar/>
        {
          this.state.currentUser ? 
          <Logout logout={this.logout}/> :
          <Login
          handleLoginFormChange={this.handleLoginFormChange}
          handleLoginFormSubmit={this.handleLoginFormSubmit}
          name={this.state.loginForm.name}
          password={this.state.loginForm.password}
          />}
          <button onClick={this.getDepartments}>Departments</button>
          { currentUser ? <Departments departments={currentUser.departments} /> : null }
      </div>
    );
  }
}

export default App; // only one thing to export can use default