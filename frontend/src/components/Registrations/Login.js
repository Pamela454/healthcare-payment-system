import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { login } from "../../actions/accountlogin";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

//could be combined with signup
//convert to pure component? 

class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      password: '',
      errors: ''
     };
  }
  //componentWillMount() {
    //return this.props.loggedInStatus ? this.redirect() : null
  //}

handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
};

handleLogin = (data) => {
  this.setState({
    account: data.account 
  })
  this.props.history.push(`/accounts/${this.props.account.id}`);
};

handleSubmit = (event) => {
    event.preventDefault()
    const {name, password} = this.state
    let account = {
      name: name,
      password: password
 }

  axios.post('http://localhost:3001/api/v1/login', {account}, {withCredentials: true})
    .then(response => {
      console.log(response)
      if (response.data.logged_in) {
        this.props.handleLogin(response.data);
        //this.redirect()
    //  } else {
    //    this.setState({
    //      errors: response.data.errors
      }
    })
    .catch(error => 
      console.log('api errors:', error));


 //redirect = () => {
 //   this.props.history.push('/')
 // }
}

handleErrors = () => {
    return (
      <div>
        <ul>
        {this.state.errors.map(error => {
        return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    )
  };

render() { 
  //const { name, password} = this.state
    return (
      <div>
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        <input
            placeholder="password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />          
        <button placeholder="submit" type="submit">
            Log In
          </button>          
          <div>
            or <Link to="signup">Sign Up</Link>
          </div>
          
          </form>
          <div>
          {
            this.state.errors ? this.handleErrors() : null
          }
        </div>
      </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    accountlogin: (account) => {
      dispatch({
        type: "SET_CURRENT_ACCOUNT",
        account: account,
      });
    },

    login: (credentials, history) => dispatch(login(credentials, history)),
  };
};


export default withRouter(connect(null, mapDispatchToProps)(Login));