import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import { deleteDepartment } from ".././actions/currentDepartments.js";

class Departments extends React.Component {
  render(props) {
    console.log(this.props.departments);
    //const handleDelete = () => {
    //this.props.deleteDepartment()
    //}
    //const departments = this.props.departments;
    const navigateTo = (id) => () =>
      this.props.history.push(`/accounts/${id}/payments/new`);

    return (
      <div class="container">
        <div class="row align-items-center">
          <div class="col">
            <h2>
              <label> Department Information</label>
              {this.props.departments
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

const mapStateToProps = (state) => {
  return {
    departments: state.departmentsReducer,
  };
};

export default withRouter(
  connect(mapStateToProps, { deleteDepartment })(Departments)
);
