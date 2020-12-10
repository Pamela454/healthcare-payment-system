import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import {BrowserRouter, Switch, Route, useLocation /*, withRouter */} from 'react-router-dom'
import Navbar from './components/Navbar';
import Login from './components/registrations/Login'
import Signup from './components/registrations/Signup'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Login/>
      </div>
    );
  }
}

export default App;