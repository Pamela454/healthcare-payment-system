import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { login } from "../../actions/currentAccount";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentAccount } from "../../actions/currentAccount";

//useForm hook?
//value of form input is determined by the state, state dictated by input field values
// only use hooks with function components
const Login = ({ login, name, password, setCurrentAccount, history }) => {
  const [form, setForm] = useState({
    name: "",
    password: "",
  });

  const handleLoginFormChange = (event, target) => {
    setForm({
      ...form,
      [target]: event.target.value,
    });
  };

  const handleLoginFormSubmit = (event) => {
    event.preventDefault(); //state contains most up to date form data. prevent page refresh
    login(form, history);
  };

  return (
    <div className="Login">
      <h1 class="text-center">Log In</h1>
      <body class="text-center">
        <Form onSubmit={handleLoginFormSubmit} class="form-inline">
          <div class="form-group align-items-center">
            <label for="inputname" class="form-label">
              Name:{" "}
            </label>
            <br></br>
            <input
              placeholder="name"
              type="text"
              class="form-control-sm"
              id="Input1"
              name="name"
              autoComplete="on"
              value={form.name}
              onChange={(event) => handleLoginFormChange(event, "name")}
            />
          </div>
          <br />
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
              autoComplete="on"
              value={form.password}
              onChange={(event) => handleLoginFormChange(event, "password")}
            />
          </div>
          <br />
          <button type="submit" class="btn btn-outline-primary">
            Log In
          </button>
          <div></div>
        </Form>
      </body>
      <div></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    form: state.form,
  };
};

export default withRouter(
  connect(mapStateToProps, { login, setCurrentAccount })(Login)
);
