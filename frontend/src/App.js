import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './components/registrations/Login'
import Signup from './components/registrations/Signup'
import Home from './components/Home'
import {connect} from 'react-redux'
import {fetchAccounts} from './actions/fetchAccounts'
import AccountsContainer from './containers/AccountsContainer'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
  }	

  componentDidMount() {
  	this.loginStatus()
}  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', 
    {withCredentials: true})    
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
        this.props.fetchAccounts({type: 'FETCH_ACCOUNTS', payload: {name: 'Checking'}})
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }
    //this.props.fetchAccounts({type: 'FETCH_ACCOUNTS', payload: {name: 'Checking'}})

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }

 
  render() {
  return (
    <div className="App">
      <AccountsContainer/>
      <BrowserRouter>
          <Switch>
            <Route exact path='/' render={props => (
              <Home {...props} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route 
              exact path='/login' 
              render={props => (
              <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route 
              exact path='/signup' 
              render={props => (
              <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
          </Switch>
        </BrowserRouter>
    </div>
  );
 }
}

export default connect(null, {fetchAccounts})(App);  //connects to redux store. returns store.dispatch(type: 'FETCH_ACCOUNTS', payload: {name: 'Checking'}}) 
