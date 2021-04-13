import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { connect } from 'react-redux'
import { loggedIn } from "./actions/currentAccount.js"
import { Elements, StripeProvider } from "react-stripe-elements";
import PaymentNew from './components/PaymentNew'
import AccountContainer from './containers/AccountContainer'
import Navbar from './components/Navbar'
import DepartmentsContainer from './containers/DepartmentsContainer'
import Login from './components/registrations/Login'
import Signup from './components/registrations/Signup'
import './App.scss'

class App extends Component {

  componentDidMount() {
    if (localStorage.getItem("loggedIn")) {
      loggedIn(this.props.history);
    }
  }

  render() {

        const stripe = loadStripe('pk_test_tZpOKpVsO8ccsjSLbrnuwwEH');
        const currentAccount = localStorage.getItem("loggedIn");
        console.log('current account is: ' + JSON.stringify(this.props.loginFormReducer));
    
    return (
      <div className="App">
            <h2 class="text-center">{ currentAccount ? 
        `Logged in as ${this.props.loginFormReducer.attributes.name}` :
        "Not logged in" }</h2> 
        <Switch>   
          <Route exact path='/api/v1/login' render={props => ( <Login {...props}/>)}/>
          <Route exact path='/api/v1/signup' render={props => ( <Signup {...props}/>)}/>
          <Redirect from="/logout" to="api/v1/login" />
          <Route exact path='/accounts/:id' render={props => {
            return <AccountContainer {...props} account={currentAccount}/>
          } }/>
          <Route exact path='/accounts/:id/departments' render={props => {
            return <DepartmentsContainer/>
          } }/>
          <Route path='/accounts/:id/payments/new' render={props => {
            <StripeProvider apiKey="pk_test_tZpOKpVsO8ccsjSLbrnuwwEH">
              <Elements>
                <PaymentNew {...props}/>
              </Elements>
            </StripeProvider>
          }} />
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