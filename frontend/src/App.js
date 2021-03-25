import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import Departments from './components/Departments'
//import React, { useState } from 'react';
import { connect } from 'react-redux'
import { loggedIn } from "./actions/currentAccount.js"
//import Payments from './components/Payments'
import AccountContainer from './containers/AccountContainer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/registrations/Login'
import Logout from './components/registrations/Logout'
import Signup from './components/registrations/Signup'

//if constantly passing down props consider connecting to the store

class App extends Component {

  //componentDidMount() { //can set state which then causes an update 
    //this.props.getCurrentAccount(); //does this need to be a hook? 
  //}
  componentDidMount() {
    this.props.loggedIn();
  }


  render() {
    const { currentAccount } = this.props  
    return (
      <div className="App">
          <h2>{ currentAccount ? 
        `Logged in as ${currentAccount.name}`  :
        "Not logged in" } 
         </h2> 
        <Navbar/>
        <Switch> 
          <Route exact path='/' render={props => ( <Home {...props}/>)}/>
          <Route exact path='/login' render={props => ( <Login {...props}/>)}/>
          <Route exact path='/signup' render={props => ( <Signup {...props}/>)}/>
          <Route exact path='/accounts/:id' render={props => {
            return <AccountContainer {...props} account={currentAccount}/>
          } 
        }/>
        </Switch>
         { currentAccount ? 
          <Logout logout={this.logout}/> : null }
         { currentAccount ? 
          <button onClick={this.getDepartments}>Departments</button> : null }
         { currentAccount ? <Departments departments={currentAccount} /> : null } 
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
//need to add in currentAccount action
export default withRouter(connect(mapStateToProps, { loggedIn })(App)); // specifies component to provide data to. 