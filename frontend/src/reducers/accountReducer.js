export default function accountReducer(state = {accounts: []}, action) {  
	switch (action.type) {
		case 'FETCH_ACCOUNTS':
          return {accounts: action.payload}
         case 'ADD_ACCOUNT':
          return {...state, accounts: [...state.accounts, action.payload]} //only override specific property 
         case 'ADD_DEPARTMENT': //at least returns some version of state
          let accounts = state.accounts.map(account => {
          	if (account.id === action.payload.id) {
          	  return action.payload 
          	} else {
          	  return account 
          	}
          })
          return {...state, accounts: accounts}
        case 'DELETE_TRANSACTION': //at least returns some version of state
          debugger; 
          let accountsNext = state.accounts.map(account => {
            if (account.id === action.payload.id) {
              return action.payload 
            } else {
              return account 
            }
          })
          return {...state, accounts: accountsNext}
         default:
          return state
    }       
}

//reducer is a function 
//state as object vs array
//updates the state based on the action 
