import React from 'react';
import { connect } from "react-redux";
import { signup } from "../../actions/currentAccount";


const Signup = ({ signupFormData, signup, history }) => {

  const handleChange = (event) => {
    const { name, status, value } = event.target;
    const formData = {
      ...signupFormData, 
      [name]: value,
      [status]: value
    };
    signup(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    signup(signupFormData, history);
  };

  //axios.post('http://localhost:3001/signup', {account}, {withCredentials: true})
    //.then(response => {
      //if (response.data.status === 'created') {
        //this.props.handleLogin(response.data)
        //this.redirect()
      //} else {
       // this.setState({
          //errors: response.data.errors
        //})
      //}
    //})
    //.catch(error => console.log('api errors:', error))
//};

//redirect = () => {
    //this.props.history.push('/')
  //}

//handleErrors = () => {
    //return (
      //<div>
        //<ul>{this.state.errors.map((error) => {
          //return <li>key={error}>{error}</li>
        //})}
        //</ul> 
      //</div>
    //)
//};
//add password confirmation to form. 

//render() {
    //const {name, password, status} = this.state
  return (
    <div>
      <h1>Sign Up</h1>         
        <form onSubmit={handleSubmit}>
          <input
            placeholder="name"
            type="text"
            name="name"
            value={signupFormData.name}
            onChange={handleChange}
          /><br/>
          <input 
            placeholder="password"
            type="password"
            name="password"
            value={signupFormData.password}
            onChange={handleChange}
          /><br/>  
         <input 
            placeholder="status"
            type="text"
            name="status"
            value={signupFormData.status}
            onChange={handleChange}
          /><br/>                 
          <button placeholder="submit" type="submit">
            Sign Up
          </button>
        </form>
      </div>
  );
};

const mapStateToProps = state => { //what portion of state to provide to props 
  return {
    signupFormData: state.signupForm 
  };
};


export default connect(mapStateToProps, { signup })(Signup);