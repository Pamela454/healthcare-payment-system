import React from "react";
import { Button } from "react-bootstrap";

//presentational component
const Accounts = (props) => {
	const handleClickAdmin = (e) => {
		//const { accountId } = e.target;
		//const accountId = props.account.id
		e.persist();
		e.preventDefault();
		props.newDepartment(props.account.account.id, props.history);
	};

	return (
		<div class="container">
			<div class="row align-items-center">
				<div class="col"></div>
			</div>
		</div>
	);
};

export default Accounts;
