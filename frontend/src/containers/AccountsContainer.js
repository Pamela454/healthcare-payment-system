// render other components, can have other functions inside them. Typically class components. 
import React from 'react'
import {connect} from 'react-redux'
// eslint-disable-next-line
import {Route, Switch} from 'react-router-dom'
import {fetchAccounts} from '../actions/fetchAccounts'
import Accounts from '../components/Accounts'
// eslint-disable-next-line
import Account from '../components/Account'
import AccountNew from '../components/AccountNew'
//import NavBar from '../components/NavBar'

class AccountsContainer extends React.Component { //can call lifecycle hooks
    //getting accounts from the backend
	componentDidMount() {
        this.props.fetchAccounts()
	}


	render () {
		return (
			<div>
			  <Switch>
				Account Container 
				<AccountNew/>
				<Accounts accounts={this.props.accounts}/>
              </Switch>
			</div>
			)
	}
}
//is this needed if not displaying list of accounts?
const mapStateToProps = state => {
	return {
		accounts: state.accounts //accounts located inside the state
	}
}

export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer)