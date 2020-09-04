import React from 'react'

const Departments = (props) => {

	return (
        <div>
           {props.departments && props.departments.map(department => 
             <li key={department.id}>{department.service} - {department.charge}</li>
           	)} 
        </div>
		)
}

export default Departments 