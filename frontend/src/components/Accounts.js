import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
//presentational component
const Accounts = (props) => {
	return (
		<div class="container">
			<div class="row align-items-center">
				<div class="col">
					{props.accounts.map((account) => (
						<li key={account.id}>
							<Button>
								<Link to={`/accounts/${account.id}`}>
									{account.name}
								</Link>
							</Button>
						</li>
					))}
				</div>
			</div>
		</div>
	);
};

export default Accounts;
