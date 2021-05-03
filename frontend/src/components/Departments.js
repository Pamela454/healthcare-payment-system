import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import { deleteDepartment } from ".././actions/currentDepartments.js";
//pure if output only depends on props
class Departments extends React.Component {
  render() {
    //const handleDelete = () => {
    //this.props.deleteDepartment()
    //}
    //const departments = this.props.departments;
    console.log(this.props);
    const navigateTo = (id) => () =>
      this.props.history.push(`/accounts/${id}/payments/new`);
    //only need one return?  needs unique keys 
    return (
      <div class="container">
        <div class="row align-items-center">
          <div class="col">
            <h2>
              <label> Department Information</label>
              {this.props
                ? this.props.departments.map((department) => {
                    return (
                      <React.Fragment>
                        <div key={department.attributes[0]}>
                          <label> Department Name - </label>{" "}
                          {department.attributes.name}
                          <br></br>
                        </div>
                        <div key={department.attributes[1]}>
                          <label> Service - </label>{" "}
                          {department.attributes.service}
                          <br></br>
                        </div>
                        <div key={department.attributes[2]}>
                          <label> Charge - </label> $
                          {department.attributes.charge}
                        </div>
                        <Button onClick={navigateTo(department.id)}>
                          Make Payment
                        </Button>
                      </React.Fragment>
                    );
                  })
                : null}
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { deleteDepartment })(Departments));
