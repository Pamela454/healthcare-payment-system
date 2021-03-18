//accepts action object
export default function accountReducer(state = null, action) {  //combines current state and action 
	switch (action.type) {
    case 'ADD_ACCOUNT': //creates a new object 
          return {...state, account: [...state.account, action.payload]} //only override specific property 
    case 'ADD_DEPARTMENT': //at least returns some version of state
          let account = state.account
          	if (account.id === action.payload.id) {
          	  return action.payload 
          	} else {
          	  return account 
          	}
          //return {...state, account: account}
    case 'DELETE_TRANSACTION': //at least returns some version of state
          //let accountsNext = state.accounts.map(account => {
            if (account.id === action.payload.id) {
              return action.payload 
            } else {
              return account 
            }
          //})
          //return {...state, accounts: accountsNext}
    default:
          return state //never return null 
    }       
}

//reducer is a function 
//state as object vs array
//updates the state based on the action 
//switch case statement so as not to clutter code with many if else statements 
