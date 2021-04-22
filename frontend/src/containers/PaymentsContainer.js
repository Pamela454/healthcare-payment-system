import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
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
									account_id={this.props.match.params.id}
								/>
							);
						}}
					/>
				</Switch>
			</div>
		);
	}
}

export default withRouter(PaymentsContainer);
