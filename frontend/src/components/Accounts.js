import React from 'react'
//import {Route, Link} from 'react-router-dom'
// eslint-disable-next-line
//import Account from './Account'

const Accounts = (props) => {

  return (
    <div>
         {props.accounts.map(account => <li key={account.id}>{account.name} - {account.balance}</li> )}
    </div>

  )
}

export default Accounts