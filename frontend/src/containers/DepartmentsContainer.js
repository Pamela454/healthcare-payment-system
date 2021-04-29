import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
//import {fetchDepartments} from '../actions/fetchDepartments'
import DepartmentNew from "../components/DepartmentNew";
import Departments from "../components/Departments";

class DepartmentsContainer extends React.Component {
	render() {
		return (
			<div>
				<Switch>
					<Route
						exact
						path="/departments/new"
						render={(props) => {
							return (
								<DepartmentNew
									{...props}
									account={this.props.account}
									departments={this.props.departments}
								/>
							);
						}}
					/>
					<Route
						exact
						path="/accounts/:id/departments"
						render={(props) => {
							console.log(props);
							return (
								<Departments
									account={this.props.account}
									departments={this.props.departments}
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
	console.log(state);
	return {
		account: state.account,
		departments: state.departments,
	};
};

export default withRouter(connect(mapStateToProps)(DepartmentsContainer));
