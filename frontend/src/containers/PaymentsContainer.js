import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PaymentNew from "../components/PaymentNew";

class PaymentsContainer extends React.Component {
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
	return {
		payments: state.payments,
		account: state.account,
	};
};

export default withRouter(connect(mapStateToProps)(PaymentsContainer));
