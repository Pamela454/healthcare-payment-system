import React from 'react'
import {Route, Link} from 'react-router-dom'
import AccountShow from './AccountShow'

const Accounts = (props) => {

  return (
    <div>
         {props.accounts.map(account => 
         	<li key={account.id}>
         	   <Link to={`/accounts/${account.id}`}>{account.name}</Link>
         	</li> )} 
    </div>

  )
}

export default Accounts