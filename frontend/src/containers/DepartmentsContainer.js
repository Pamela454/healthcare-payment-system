import React from 'react'
import {Route, Switch} from 'react-router-dom'
//import {connect} from 'react-redux'
//import {fetchDepartments} from '../actions/fetchDepartments'
import DepartmentNew from '../components/DepartmentNew'
import Departments from '../components/Departments'


class DepartmentsContainer extends React.Component {
    //getting departments from the backend, can't be passed in as a prop 
	//componentDidMount() {
      //  this.props.fetchDepartments() //dispatching to redux store 
	//}
   

	render () {
		return (
			<div>
			 <Switch>
				<Route exact path='/departments/new' render={props => {
					return <DepartmentNew {...props} account={this.props.account}/> }
				 }/>
				<Route exact path='/departments' render={props => {
					return <Departments {...props} departments={this.props.account && this.props.account.departments}/> }
				}/>
			 </Switch>
			</div>

		)
	}
}
//is this needed if not displaying list of accounts?
//const mapStateToProps = state => {
//	return {
//		departments: state.departments //accounts located inside the state
//	}
//}

export default DepartmentsContainer