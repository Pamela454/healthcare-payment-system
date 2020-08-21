import React from 'react';
import {connect} from 'react-redux'
import AccountsContainer from './containers/AccountsContainer'

class App extends React.Component {

  componentDidMount() {
      fetch('http://localhost:3000/api/v1/accounts')
      //default is a get request
      //returns a promise, takes some time 
      .then(response => response.json())
      .then(data => console.log(data))
  }



  render() {
  return (
    <div className="App">
      <AccountsContainer/>
    </div>
  );
 }
}

//const mapStateToProps = (state) => {  //access to see what is already in store
  //return {
    //accounts: state.accounts 
  //}
//}

export default connect()(App);  //connects to redux store. returns store.dispatch(type: 'FETCH_ACCOUNTS', payload: {name: 'Checking'}}) 
