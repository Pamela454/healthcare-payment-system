import React from 'react'
// eslint-disable-next-line
import {Route, Link} from 'react-router-dom'
// eslint-disable-next-line
import Account from './Account'

const Accounts = (props) => {

  return (
    <div>
         {props.accounts.map(account =>
         <li key={account.id}>
         <Link to={`/accounts/${account.id}`}>{account.name} - ${account.balance} - ${account.copay} {account.insurance}</Link>
         </li> )}
    </div>

  )
}

export default Accounts