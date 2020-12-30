import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";
import Departments from './components/Departments'
import Payments from './components/Payments'
import AccountContainer from './containers/AccountContainer'
import Navbar from './components/Navbar'
import Login from './components/registrations/Login'
import Logout from './components/registrations/Logout'
import { connect } from 'react-redux'
//import { getCurrentUser } from "./actions/currentUser.js"
import Signup from './components/registrations/Signup'

//if constantly passing down props consider connecting to the store

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
      fetch("http://localhost:3001/api/v1/get_current_user", {
        headers: {
          "Authorization": token
        }
      })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          this.setState({
            currentUser: resp.user 
          })
        }
       })
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
    fetch("http://localhost:3001/login", headers)
    .then(r => r.json())
    .then(userJSON => { 
      if (userJSON.error) {
        alert("invalid credentials") 
      } else {
        this.setState({
          currentUser: userJSON,
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

getDepartments = () => {
    fetch(`http://localhost:3001/api/v1/accounts/${this.state.currentUser.account_id}/departments`)
    .then(r => r.json())
    .then(console.log)
    .then(userJSON => { 
      if (userJSON.error) {
      }
    })
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
    const { currentUser } = this.state
    //let { path, url } = useRouteMatch();

    return (
      <div className="App">
        <h2>{ currentUser ?
        `Logged in as ${currentUser.name}`  :
        "Not logged in" }
         </h2> 
       <Router>
        <Navbar/>
        <Switch> 
          <Route exact path='/' render={() => (<Login 
            handleLoginFormChange={this.handleLoginFormChange}
            handleLoginFormSubmit={this.handleLoginFormSubmit}
            name={this.state.loginForm.name}
            password={this.state.loginForm.password}
            />)}/>
          <Route exact path='/signup' render={() => (<Signup/>)}/>
          <Route exact path='/account' render={routerProps => <AccountContainer {...routerProps} accounts={this.state.currentUser}/>} />
        </Switch>
       </Router>
         { currentUser ? 
          <Logout logout={this.logout}/> : null }
          <button onClick={this.getDepartments}>Departments</button>
         { currentUser ? <Departments departments={currentUser.departments} /> : null }
    </div>
    );
  }
}

export default App; // only one thing to export can use default