import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { connect } from 'react-redux'
import { loggedIn } from "./actions/currentAccount.js"
import {Elements} from '@stripe/react-stripe-js';
import { Container } from 'react-bootstrap'
import PaymentNew from './components/PaymentNew'
import AccountContainer from './containers/AccountContainer'
import NavBar from './components/NavBar.js'
import DepartmentsContainer from './containers/DepartmentsContainer'
import Login from './components/registrations/Login'
import Logout from './components/registrations/Logout'
import Signup from './components/registrations/Signup'
import './App.scss'

class App extends Component {

  componentDidMount() {
    if (localStorage.getItem("loggedIn")) {
      loggedIn(this.props.history);
    }
  }

  render() {
    //const stripePromise = useMemo(() => loadStripe('sk_test_YL9LwX6O769OsJcgA3tH1gjP', { stripeAccount }),[stripeAccount],)

        const stripePromise = loadStripe('sk_test_YL9LwX6O769OsJcgA3tH1gjP');           
        const currentAccount = localStorage.getItem("loggedIn");
        console.log('current account is: ' + JSON.stringify(this.props.loginFormReducer));
    
  return (
   <div className = "Appclass text-center">  
    <Container>
       <Elements stripe={stripePromise} >    
        <NavBar currentAccount={currentAccount} />
          <h2>{ currentAccount ? `${this.props.loginFormReducer.attributes.name} is signed in` 
            : "Not logged in" } </h2>
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
          <Route exact path='/accounts/:id/payments/new' render={props => {
            return <PaymentNew/>
          } }/>
        </Switch>
      {currentAccount ? <Logout /> : null}
     </Elements>
  </Container>
 </div>
 );
  };
};

const mapStateToProps = (state) => { //what portion of state to provide to props 
  return { //executed with each change to the store. 
    ...state
  };
}


export default withRouter(
  connect(mapStateToProps, { loggedIn })(App)
  );  