import React from 'react'
//import {Route, Link} from 'react-router-dom'
import AccountShow from './AccountShow'

const Accounts = (props) => {

  return (
    <div>
         {props.accounts.map(account => 
         	<div key={account.id}><AccountShow account={account}/></div> )} 
    </div>

  )
}

export default Accounts