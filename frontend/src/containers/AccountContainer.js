// render other components, can have other functions inside them. Typically class components.
import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Accounts from "../components/Accounts";
import Account from "../components/Account";
import AccountNew from "../components/AccountNew";
import { getAllAccounts } from "../actions/currentAccount.js";

//import NavBar from '../components/NavBar'

//containers manage state and class methods
//provides data and behavior to children
//react creates instances of it
//more time consuming than calling a function
//only compnent connected to store?

class AccountContainer extends Component {
	componentDidMount() {
		this.props.getAllAccounts();
	}

	//can call lifecycle hooks
	//render stated component
	//return react element from render function

	render() {
		console.log(this.props.accounts);

		return (
			<div>
				<Switch>
					<Route exact path="/accounts/new" component={AccountNew} />
					<Route
						exact
						path="/accounts/:id"
						render={(props) => {
							console.log(this.props.accounts);
							console.log(this.props.account);
							return (
								<Account
									{...props}
									account={this.props.account}
								/>
							);
						}}
					/>
					<Route
						exact
						path="/accounts"
						render={(props) => {
							return (
								<Accounts
									{...props}
									accounts={this.props.accounts}
								/>
							);
						}}
					/>
				</Switch>
			</div>
		);
	}
}
//selects part of data from the store that the component needs. receives entire store, returns object
//is this needed if not displaying list of accounts?
const mapStateToProps = (state) => {
	//subscribe to redux updates
	//this is the state from redux
	return {
		account: state.loginFormReducer, //accounts located inside the state
		accounts: state.accounts,
	};
};
//dispatch happens automatically with connect
export default connect(mapStateToProps, { getAllAccounts })(AccountContainer);
