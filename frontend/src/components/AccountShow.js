import React from 'react'
import {Redirect} from "react-router-dom"
import DepartmentsContainer from '../containers/DepartmentsContainer'

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