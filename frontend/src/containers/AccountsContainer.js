// render other components, can have other functions inside them. Typically class components. 
import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import {fetchAccounts} from '../actions/fetchAccounts'
import Accounts from '../components/Accounts'
import AccountShow from '../components/AccountShow'
import AccountNew from '../components/AccountNew'
//import NavBar from '../components/NavBar'

//containers manage state and class methods 
//provides data and behavior to children 

class AccountsContainer extends React.Component { //can call lifecycle hooks
    //getting accounts from the backend
	componentDidMount() {
        this.props.fetchAccounts()
	}

//render stated component 
	render () {
		return (
			<div>
			 <Switch>
			    <Route path='/accounts/new' component={AccountNew} />
			    <Route exact path='/accounts/:id' render={(routerProps) => <AccountShow {...routerProps} accounts={this.props.accounts}/> } />
			    <Route exact path='/accounts' render={(routerProps) => <Accounts {...routerProps} accounts={this.props.accounts}/> } /> 
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