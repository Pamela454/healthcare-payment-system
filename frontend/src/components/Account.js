//import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import React from 'react'
//import { useHistory } from 'react-router-dom';
//import {Redirect} from "react-router-dom"
import { withRouter } from "react-router-dom";
import { Button } from 'react-bootstrap'
import { getDepartments } from ".././actions/currentDepartments.js"
//import DepartmentsContainer from '../containers/DepartmentsContainer'

//does not go through lifecycle checks, functional component
//cannot store state
//takes props as an argument and returns a react element 
//returns JSX instead of using render method 
//updates based on prop changes or if parent component rerenders 
//can't use hooks
//can't use this.state 
const Account = (props) => {
	//let account = props.accounts[props.match.params.id - 1]
//do you need a key?, only if iterating 
//do I need a default balance of 0 when creating a new account? 
  
  //const history = useHistory();

    const handleClick = (e) => {
        //const { accountId } = e.target;
        //const accountId = props.account.id
        e.persist()
        console.log(props.history)
        e.preventDefault();
        props.getDepartments(props.account.id, props.history)
    }
//add value to button? 
return (
	<div>
     <h2>
     	<label> Account Name </label>{props.account? ` - ` + props.account.attributes.name : null} 
        <br></br>
     	<label> Account Balance </label>{props.account ? `$` + props.account.attributes.balance : null}
     </h2>
        <Button onClick={handleClick}>View Departments</Button>
     </div>
	)

}



export default withRouter(connect(null, { getDepartments } )(Account)); 