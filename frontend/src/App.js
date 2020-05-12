import React from 'react';
import {connect} from 'react-redux'
import {fetchAccounts} from './actions/fetchAccounts'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchAccounts({type: 'FETCH_ACCOUNTS', payload: {name: 'Checking'}})
  }



  render() {
  return (
    <div className="App">
      App
    </div>
  );
 }
}

const mapStateToProps = (state) => {  //access to see what is already in store
  return {
    accounts: state.accounts 
  }
}

export default connect(null, {fetchAccounts})(App);  //connects to redux store. returns store.dispatch(type: 'FETCH_ACCOUNTS', payload: {name: 'Checking'}}) 
