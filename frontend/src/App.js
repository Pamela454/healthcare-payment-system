import React from 'react';
import {connect} from 'react-redux'
import {fetchAccounts} from './actions/fetchAccounts'
import AccountsContainer from './containers/AccountsContainer'

class App extends React.Component {

  componentDidMount() {

  }



  render() {
  return (
    <div className="App">
      <AccountsContainer/>
    </div>
  );
 }
}

const mapStateToProps = (state) => {  //access to see what is already in store
  return {
    accounts: state.accounts 
  }
}

export default connect()(App);  //connects to redux store. returns store.dispatch(type: 'FETCH_ACCOUNTS', payload: {name: 'Checking'}}) 
