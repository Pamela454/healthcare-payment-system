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
//react creates instances of it 
//more time consuming than calling a function 

class AccountsContainer extends React.Component { //can call lifecycle hooks
    //getting accounts from the backend, data can't be passed as prop 
	componentDidMount() {
        this.props.fetchAccounts()
	}

//render stated component 
//return react element from render function 
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
const mapStateToProps = state => { //this is the state from redux 
	return {
		accounts: state.accounts //accounts located inside the state
	}
}

export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer)