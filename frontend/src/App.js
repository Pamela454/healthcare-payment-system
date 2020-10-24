import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import {BrowserRouter, Switch, Route, useLocation /*, withRouter */} from 'react-router-dom'
import Login from './components/registrations/Login'
import Signup from './components/registrations/Signup'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      account: {}
     };
  }

  componentDidMount() {
    this.loginStatus()
  }

//axios has feature to protect against cross site forgery 
  loginStatus = () => {
    axios.get('http://localhost:3001/api/v1/is_logged_in',  //converts response to JSON automatically 
      {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      account: data.account
    })
  }

  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    account: {}
    })
  }

  render() {
    return (
       <BrowserRouter>
          <Switch>
            <Route exact path='/api/v1/signup' render={props => (
              <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />
              )}/>
            <Route exact path='/api/v1/login' render={props => (
              <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}  />
              )} />
            <Route exact path="/">
                <Redirect to="/api/v1/login"/>
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </BrowserRouter>
    );
  }
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default App;