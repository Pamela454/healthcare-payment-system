import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Departments from './components/Departments'
//import React, { useState } from 'react';
import { connect } from 'react-redux'
import { getCurrentAccount } from "./actions/setCurrentAccount.js"
//import Payments from './components/Payments'
import AccountContainer from './containers/AccountContainer'
import Navbar from './components/Navbar'
import Login from './components/registrations/Login'
import Logout from './components/registrations/Logout'
import Signup from './components/registrations/Signup'

//if constantly passing down props consider connecting to the store

class App extends Component {

  componentDidMount() { //can set state which then causes an update 
    this.props.getCurrentAccount(); //does this need to be a hook? 
  }



  render() {
    const { currentAccount } = this.props  

    return (
      <div className="App">
          <h2>{ currentAccount ? 
        `Logged in as ${currentAccount.name}`  :
        "Not logged in" } 
         </h2> 
       <Router>
        <Navbar/>
        <Switch> 
          <Route exact path='/' render={() => (<Login 
            name={this.props.name} 
            password={this.props.password} 
            />)}/>
          <Route exact path='/signup' render={() => (<Signup/>)}/>
          <Route exact path='/account' render={routerProps => <AccountContainer {...routerProps} accounts={this.state.currentUser}/>} />
        </Switch>
       </Router>
         { currentAccount ? 
          <Logout logout={this.logout}/> : null }
          <button onClick={this.getDepartments}>Departments</button>
         { currentAccount ? <Departments departments={currentAccount.departments} /> : null } 
    </div>
    );
  }
}
//receives entire state as it's argument 
const mapStateToProps = ({ currentAccount }) => { //what portion of state to provide to props 
  return { //executed with each change to the store. 
    currentAccount
  };
}
//need to add in currentAccount action
export default connect(mapStateToProps, { getCurrentAccount })(App); // specifies component to provide data to. 