//import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import React from "react";
//import { useHistory } from "react-router-dom";
//import {Redirect} from "react-router-dom"
import Accounts from "./Accounts.js";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import { getDepartments } from ".././actions/currentDepartments.js";
import { newDepartment } from ".././actions/currentDepartments.js";

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
        props.getDepartments(props.account.account.id, props.history);
    };

    const handleClickAdmin = (e) => {
        //const { accountId } = e.target;
        //const accountId = props.account.id
        e.persist();
        e.preventDefault();
        props.newDepartment(props.account.account.id, props.history);
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
                            ? ` - ` + props.account.account.attributes.name
                            : null}
                        <br></br>
                        <label> Account Balance </label>
                        {props.account.account.attributes.balance != null
                            ? `  $` + props.account.account.attributes.balance
                            : null}
                    </h2>
                    {props.account.account.attributes.status === "patient" ? (
                        <Button onClick={handleClick}>View Charges</Button>
                    ) : null}
                    {props.account.account.attributes.status === "admin" ? (
                        <Accounts />
                    ) : null}
                </div>
            </div>
        </div>
    );
};
//withRouter gives access to this.props.history, match, and location
//second connect argument is matchdispatch to props. changes the state. receives props.dispatch through connect if no param.
//can specify an action to dispatch.
export default withRouter(connect(null, { getDepartments })(Account));
