//import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import React from "react";
//import { useHistory } from "react-router-dom";
//import {Redirect} from "react-router-dom"
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import { getDepartments } from ".././actions/currentDepartments.js";
//import DepartmentsContainer from '../containers/DepartmentsContainer'

//does not go through lifecycle checks, functional component
//takes props as an argument and returns a react element
//returns JSX instead of using render method
//updates based on prop changes or if parent component rerenders
const Account = (props) => {
    //let account = props.accounts[props.match.params.id - 1]
    //do you need a key?, only if iterating
    //do I need a default balance of 0 when creating a new account?

    const handleClick = (e) => {
        //const { accountId } = e.target;
        //const accountId = props.account.id
        e.persist();
        e.preventDefault();
        this.props.getDepartments(props.account.account_id, props.history);
    };
    //add value to button?
    return (
        <div class="container">
            <div class="row align-items-center">
                <div class="col">
                    <h2>
                        {" "}
                        {/* can assign a key by converting to an integer? item index? */}
                        <label> Account Name </label>
                        {props.account
                            ? ` - ` + props.account.attributes.name
                            : null}
                        <br></br>
                        <label> Account Balance </label>
                        {props.account
                            ? `$` + props.account.attributes.balance
                            : null}
                    </h2>
                    <Button onClick={handleClick}>View Departments</Button>
                </div>
            </div>
        </div>
    );
};

export default withRouter(connect(null, { getDepartments })(Account));
