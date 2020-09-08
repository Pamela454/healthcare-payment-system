import React from 'react'
import {connect} from 'react-redux'
import {deleteDepartment} from '../actions/deleteDepartment'

const Departments = (props) => {


const handleDelete = (department) => {
      props.deleteDepartment(department.id, department.account_id)
}


	return (
        <div>
           {props.departments && props.departments.map(department => 
             <li key={department.id}>{department.service} - {department.charge} <button onClick={() => handleDelete(department)}>Delete</button></li>
           	)} 
        </div>
		)
}

export default connect(null, {deleteDepartment})(Departments) 