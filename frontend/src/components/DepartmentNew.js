import React from "react";
import { useState } from "react";
//import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { newDepartment } from ".././actions/currentDepartments.js";

const DepartmentNew = ({ newDepartment, history }) => {
  const [form, setForm] = useState({
    name: "",
    service: "",
    charge: "",
    //account_id: needs to be the account that you want to add to, not logged in as,
  });

  const handleNewDepartmentFormChange = (event, target) => {
    setForm({
      ...form,
      [target]: event.target.value,
    });
  };

  const handleNewDepartmentFormSubmit = (event) => {
    event.preventDefault();
    newDepartment(form, history);
  };

  return (
    <div>
      <form onSubmit={handleNewDepartmentFormSubmit}>
        <label>Department New</label>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={(event) => handleNewDepartmentFormChange(event, "name")}
        />
        <label>Service:</label>
        <input
          type="text"
          name="service"
          value={form.service}
          onChange={(event) => handleNewDepartmentFormChange(event, "service")}
        />
        <label>Charge:</label>
        <input
          type="text"
          name="charge"
          value={form.charge}
          onChange={(event) => handleNewDepartmentFormChange(event, "charge")}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  //is this necessary?
  //what portion of state to provide to props
  //need props passed in at the top
  return {
    newDepartmentData: state.newDepartmentData,
  };
};

export default connect(mapStateToProps, { newDepartment })(DepartmentNew);
