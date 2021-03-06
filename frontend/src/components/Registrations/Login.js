import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { login } from "../../actions/currentAccount";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentAccount } from "../../actions/currentAccount";
//data handled by component
//useForm hook?
//value of form input is determined by the state, state dictated by input field values
// only use hooks with function components
const Login = ({ login, name, password, setCurrentAccount, history }) => {
  const [form, setForm] = useState({
    //array destructuring
    account: {
      name: "",
      password: "",
    },
  });

  const handleLoginFormChange = (event, target) => {
    setForm({
      ...form,
      [target]: event.target.value,
    });
  };

  const handleLoginFormSubmit = (event) => {
    //does this need to be bound?
    event.preventDefault(); //state contains most up to date form data. prevent page refresh
    login(form, history);
  };

  return (
    <body class="text-center">
      <div class="Login">
        <h1 class="text-center">Log In</h1>
        <Form onSubmit={handleLoginFormSubmit} class="form-inline">
          <div class="form-group align-items-center">
            <label for="inputname" class="form-label">
              Name:{" "}
            </label>
            <br></br>
            <input
              placeholder="name"
              type="text"
              className="form-control-sm"
              id="Input1"
              name="name"
              autoComplete="on"
              value={form.name}
              onChange={(event) => handleLoginFormChange(event, "name")}
            />
          </div>
          <br></br>
          <br></br>
          <div class="form-group  align-items-center">
            <label for="inputpassword" class="form-label">
              Password:{" "}
            </label>
            <br></br>
            <input
              placeholder="password"
              type="password"
              className="form-control-sm"
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
      </div>
    </body>
  );
};

const mapStateToProps = (state) => {
  //do I need this?
  //need props passed in at the top
  return {
    form: state.form,
  };
};

export default withRouter(
  connect(mapStateToProps, { login, setCurrentAccount })(Login)
);
