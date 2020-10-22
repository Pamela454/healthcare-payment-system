import React from 'react'
import {Redirect} from "react-router-dom"
import DepartmentsContainer from '../containers/DepartmentsContainer'

//does not go through lifecycle checks, functional component
//cannot store state
//returns JSX instead of using render method 
//updates based on prop changes or if parent componenet rerenders 

const Account = (props) => {

	let account = props.accounts[props.match.params.id - 1]

return (
	<div>
     <h2>
     	<label> Account Name </label>{account ? account.name : null} - <label> Account Balance </label>{account ? account.balance : null}
     </h2>
       <DepartmentsContainer account={account}/>
     </div>

	)

}

export default Account 