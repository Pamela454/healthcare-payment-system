import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { deleteDepartment } from ".././actions/currentDepartments.js"

class Departments extends React.Component {

 render(props) {
    console.log(this.props.departments)
    //const handleDelete = () => {
      //this.props.deleteDepartment()
    //}
    //const departments = this.props.departments;
    const navigateTo = (id) => () => this.props.history.push(`/accounts/${id}/payments/new`);

    return (
            <div>
            <label> Department </label> 
            {this.props.departments ?
              this.props.departments.map(department => {
                return(
                <React.Fragment>
               <div key={department.id}><label> Name - </label> {department.attributes.name}</div>
               <div key={department.id}><label> Service - </label> {department.attributes.service}</div>
               <div key={department.id}><label> Charge - </label> ${department.attributes.charge}</div>
               <Button onClick={navigateTo(department.id)}>Make Payment</Button>
               </React.Fragment>
               );
              }) : null }
            </div>
           );
  }
}

const mapStateToProps = state => {
  return {
    departments: state.departmentsReducer 
  }
}

export default withRouter(connect(mapStateToProps, {deleteDepartment})(Departments)) 

