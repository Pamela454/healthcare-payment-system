import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
//import {fetchDepartments} from '../actions/fetchDepartments'
import DepartmentNew from '../components/DepartmentNew'
import Departments from '../components/Departments'


class DepartmentsContainer extends React.Component {
    
   
	render () {
		return (
			<div>
			 <Switch>
				<Route exact path='/departments/new' render={props => {
					return <DepartmentNew {...props} account={this.props}/> }
				 }/>
				<Route path='/accounts/:id/departments' render={props => {
					return <Departments/> }
				}/>
			 </Switch>
			</div>

		)
	}
}


export default withRouter((DepartmentsContainer))