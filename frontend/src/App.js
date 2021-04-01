import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
//import Departments from './components/Departments'
//import React, { useState } from 'react';
import { connect } from 'react-redux'
import { loggedIn } from "./actions/currentAccount.js"
//import Logout from './components/registrations/Logout';
//import Payments from './components/Payments'
import AccountContainer from './containers/AccountContainer'
import Navbar from './components/Navbar'
//import DepartmentsContainer from './containers/DepartmentsContainer'
import Login from './components/registrations/Login'
import Signup from './components/registrations/Signup'

//if constantly passing down props consider connecting to the store

class App extends Component {

  componentDidMount() {
    if (localStorage.getItem("loggedIn")) {
      loggedIn(this.props.history);
    }
  }

  render() {
    const currentAccount = localStorage.getItem("loggedIn");

    return (
      console.log(this.props),
      <div className="App">
             <h2>{ currentAccount ? 
        `Logged in as ${this.props.loginFormReducer.attributes.name}` :
        "Not logged in" }</h2>
        <Switch>   
          <Route exact path='/api/v1/login' render={props => ( <Login {...props}/>)}/>
          <Route exact path='/api/v1/signup' render={props => ( <Signup {...props}/>)}/>
          <Route exact path='/accounts/:id' render={props => {
            return <AccountContainer {...props} account={currentAccount}/>
          } }/>
        </Switch>
         { currentAccount ? <Navbar account={currentAccount}/> : null } 
    </div>
    );
  }
}
//gives access to part of store 
//receives entire state as it's argument 
const mapStateToProps = state => { //what portion of state to provide to props 
  return { //executed with each change to the store. 
    ...state
  };
}
//could be changed to anonymous arrow function 
//dispatch is injected as a prop
export default withRouter(connect(mapStateToProps, { loggedIn })(App)); // specifies component to provide data to. 