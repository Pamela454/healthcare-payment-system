import React from 'react'
import {connect} from 'react-redux'
import { deleteDepartment } from ".././actions/currentDepartments.js"

class Departments extends React.Component {

  render() {
    const handleDelete = (department) => {
      this.props.deleteDepartment(department.id, department.account_id)
    }
    return (
        <div>
          <h3>
            <button onClick={() => handleDelete(this.props.departments)}>Delete Department</button>
              <h2>{ this.props.departments.data.length  > 1 ? 
               this.props.departments.data.map(department => (
               <label> Department Id </label>
              (<React.Fragment key={department.id}> 
              <h2>{department.service}</h2> - 
              <h2>{department.charge}</h2>
              </React.Fragment>))) : null }</h2>
            </h3>
        </div>
		  )
    }
}

export default connect(null, {deleteDepartment})(Departments) 