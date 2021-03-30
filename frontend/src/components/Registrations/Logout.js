import React from 'react';
import { logout } from "../../actions/currentAccount.js";
import { Button } from 'react-bootstrap'
import { connect } from "react-redux";
import {Link} from 'react-router-dom'



class Logout extends React.Component {
  render() {
  return (
        <Button onClick={this.props.logout}><Link to="/logout">Log Out</Link></Button>
  );
 }

}

export default connect(null, {logout})(Logout) 