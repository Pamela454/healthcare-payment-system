import React from 'react'
import {connect} from 'react-redux'
import {deleteDepartment} from '../actions/deleteDepartment'

const Departments = (props) => {


	const handleDelete = (department) => {
      props.deleteDepartment(department.id, department.account_id)
	}
console.log(props.departments)
	return (
        <div>
            {props.departments > 1 ? props.departments.map(department => 
             <li key={department.id}>{department.service} - {department.charge} <button onClick={() => handleDelete(department)}>Delete</button></li>
           	) : null } 
        </div>
		)
}

export default connect(null, {deleteDepartment})(Departments) 