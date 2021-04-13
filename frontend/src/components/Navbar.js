import React from "react";
import { Link } from "react-router-dom";
import Logout from "./registrations/Logout";

const Navbar = (props, currentAccount) => {
	return (
		<div class="container">
			<nav class="navbar fixed-bottom navbar-light bg-light">
				{props.account ? null : (
					<Link exact activeClassName="active" to="/api/v1/signup">
						Signup
					</Link>
				)}
				{props.account ? <Logout /> : null}
			</nav>
		</div>
	);
};

export default Navbar;
