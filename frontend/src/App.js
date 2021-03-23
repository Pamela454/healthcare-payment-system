import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import Departments from './components/Departments'
//import React, { useState } from 'react';
import { connect } from 'react-redux'
import { getCurrentAccount } from "./actions/currentAccount.js"
//import Payments from './components/Payments'
import AccountContainer from './containers/AccountContainer'
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
    this.props.getCurrentAccount();
    console.log(this.props)
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
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
          <Route exact path='/accounts/:id' render={props => {
            return <AccountContainer {...props} account={currentAccount}/>
          } 
        }/>
        </Switch>
         { currentAccount ? 
          <Logout logout={this.logout}/> : null }
         { currentAccount ? 
          <button onClick={this.getDepartments}>Departments</button> : null }
         { currentAccount ? <Departments departments={currentAccount.departments} /> : null } 
    </div>
    );
  }
}
//gives access to part of store 
//receives entire state as it's argument 
const mapStateToProps = state => { //what portion of state to provide to props 
  return ({ //executed with each change to the store. 
    currentAccount: state.account 
  });
}
//need to add in currentAccount action
export default withRouter(connect(mapStateToProps, { getCurrentAccount })(App)); // specifies component to provide data to. 