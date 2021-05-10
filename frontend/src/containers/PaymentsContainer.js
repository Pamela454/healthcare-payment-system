import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PaymentNew from "../components/PaymentNew";

class PaymentsContainer extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route
						exact
						path="/accounts/:id/payments/new"
						render={(props) => {
							console.log(this.props);
							return (
								<PaymentNew
									{...props}
									account={this.props.account}
									payments={this.props.payments}
								/>
							);
						}}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	//this is the state from redux
	console.log(state);
	return {
		payments: state.paymentsReducer.payments,
		account: state.loginFormReducer.account,
	};
};

export default withRouter(connect(mapStateToProps)(PaymentsContainer));
