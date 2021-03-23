// render other components, can have other functions inside them. Typically class components. 
import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import { getCurrentAccount } from '../actions/currentAccount'
import Accounts from '../components/Accounts'
import Account from '../components/Account'
import AccountNew from '../components/AccountNew'
//import NavBar from '../components/NavBar'

//containers manage state and class methods 
//provides data and behavior to children 
//react creates instances of it 
//more time consuming than calling a function 
//only compnent connected to store?

class AccountsContainer extends React.Component { //can call lifecycle hooks
	
//render stated component 
//return react element from render function 
	render () {
		return (
			<div>
			 <Switch>
			    <Route path='/accounts/new' component={AccountNew} />
			    <Route exact path='/accounts/:id' render={(routerProps) => <Account {...routerProps} accounts={this.props.account}/> } />
			    <Route exact path='/accounts' render={(routerProps) => <Accounts {...routerProps} accounts={this.props.account}/> } /> 
			 </Switch>
			</div>
			)
	}
}
//is this needed if not displaying list of accounts?
const mapStateToProps = state => { //this is the state from redux 
	return {
		accounts: state.accounts //accounts located inside the state
	}
}
//dispatch happens automatically with connect 
export default connect(mapStateToProps, { getCurrentAccount })(AccountsContainer)