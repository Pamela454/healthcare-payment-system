import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
//import {Redirect} from "react-router-dom"
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

const Account = (props) => {
	//let account = props.accounts[props.match.params.id - 1]
//do you need a key?, only if iterating 
//do I need a default balance of 0 when creating a new account? 
	console.log(props.account)
return (
	<div>
     <h2>
     	<label> Account Name </label>{props.account? ` - ` + props.account.attributes.name : null} 
     	<label> Account Balance </label>{props.account ? `$` + props.account.attributes.balance : null}
     </h2>
        <Button onClick={this.props.getDepartments}><Link to="/departments">View Departments</Link></Button>
       <DepartmentsContainer {...props}/>
     </div>

	)

}

export default connect(null, {getDepartments})(Account) 