import React from 'react';
import { logout } from "../../actions/currentAccount.js";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

class Logout extends React.Component {


  render() {
  return (
        <button type="button" class="btn btn-outline-primary" onClick={this.props.logout}>
        	<Link to="/logout">Log Out</Link>
        </button>
  );
 }

}

export default connect(null, {logout})(Logout) 