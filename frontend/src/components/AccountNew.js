import React from "react";
//import {connect} from 'react-redux'

class AccountNew extends React.Component {
  state = { name: "", balance: "" };

  onChange = (event) => {
    this.setState({
      //do not directly set state, can accept a function to display most up to date value
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.newAccount(this.state);
    this.setState({
      name: "",
      balance: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Account Name: </label>
          <input
            type="text"
            placeholder="Name"
            value={this.state.name}
            name="name"
            onChange={this.onChange}
          />
          <br />
          <label>Account Balance: </label>
          <input
            type="text"
            placeholder="Balance"
            value={this.state.balance}
            name="balance"
            onChange={this.onChange}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default AccountNew;
