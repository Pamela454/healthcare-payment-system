import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
//import {Redirect} from "react-router-dom"
//import { withRouter } from "react-router-dom";
import { Button } from 'react-bootstrap'
import { getDepartments } from ".././actions/currentDepartments.js"
import DepartmentsContainer from '../containers/DepartmentsContainer'

//does not go through lifecycle checks, functional component
//cannot store state
//takes props as an argument and returns a react element 
//returns JSX instead of using render method 
//updates based on prop changes or if parent component rerenders 
//can't use hooks
//can't use this.state 

const Account = (props, history) => {
	//let account = props.accounts[props.match.params.id - 1]
//do you need a key?, only if iterating 
//do I need a default balance of 0 when creating a new account? 
const accountId = props.account.id
	console.log(props.account.id)
return (
	<div>
     <h2>
     	<label> Account Name </label>{props.account? ` - ` + props.account.attributes.name : null} 
     	<label> Account Balance </label>{props.account ? `$` + props.account.attributes.balance : null}
     </h2>
        <Button onClick={getDepartments(props.account.id, history)}><Link to={`/accounts/${accountId}/departments`}>View Departments</Link></Button>
       <DepartmentsContainer {...props}/>
     </div>
	)
}



export default connect(null, { getDepartments } )(Account); 