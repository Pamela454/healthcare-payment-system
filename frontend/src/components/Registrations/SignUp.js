import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { signup } from "../../actions/currentAccount";

const Signup = ({ name, password, status, signup, history }) => {
  const [signupFormData, setForm] = useState({
    name: "",
    password: "",
    status: "",
  });

  const handleSignupFormChange = (event, target) => {
    setForm({
      ...signupFormData,
      [target]: event.target.value,
    });
  };

  const handleSignupFormSubmit = (event) => {
    event.preventDefault();
    signup(signupFormData, history);
  };

  return (
    <div className="Signup">
      <h1 class="text-center">Sign Up</h1>
      <body class="text-center">
        <Form onSubmit={handleSignupFormSubmit} class="form-inline">
          <div class="form-group align-items-center">
            <label for="inputname" class="form-label">
              Name:{" "}
            </label>
            <br></br>
            <input
              placeholder="name"
              type="text"
              class="form-control-sm"
              name="name"
              value={signupFormData.name}
              onChange={(event) => handleSignupFormChange(event, "name")}
            />
          </div>
          <br></br>
          <div class="form-group  align-items-center">
            <label for="inputpassword" class="form-label">
              Password:{" "}
            </label>
            <br></br>
            <input
              placeholder="password"
              type="password"
              class="form-control-sm"
              name="password"
              value={signupFormData.password}
              onChange={(event) => handleSignupFormChange(event, "password")}
            />
          </div>
          <br></br>
          <div class="form-group  align-items-center">
            <label>
              <select
                value={signupFormData.status}
                onChange={(event) => handleSignupFormChange(event, "status")}
              >
                <option value="patient">Patient</option>
                <option value="admin">Administrator</option>
              </select>
            </label>
          </div>
          <br></br>
          <button type="submit" class="btn btn-outline-primary">
            Sign Up
          </button>
        </Form>
      </body>
    </div>
  );
};

const mapStateToProps = (state) => {
  //what portion of state to provide to props
  return {
    signupFormData: state.signupForm,
  };
};

export default connect(mapStateToProps, { signup })(Signup);
