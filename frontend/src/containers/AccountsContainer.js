// render other components, can have other functions inside them. Typically class components. 
import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'

import {fetchAccounts} from '../actions/fetchAccounts'
import Accounts from '../components/Accounts'
import AccountShow from '../components/AccountShow'
import AccountNew from '../components/AccountNew'
//import NavBar from '../components/NavBar'

class AccountsContainer extends React.Component { //can call lifecycle hooks
    //getting accounts from the backend
	componentDidMount() {
        this.props.fetchAccounts()
	}

//render stated component 
	render () {
		return (
			<div>
			    <Route path='/accounts/new' component={AccountNew} />
			    <Route exact path='/accounts' render={() => <Accounts accounts={this.props.accounts}/> } /> 
			    <Route path='/accounts/:id' render={() => <Accounts accounts={this.props.accounts}/> } />
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