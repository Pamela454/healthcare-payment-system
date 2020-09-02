export default function accountReducer(state = {accounts: []}, action) {  
	switch (action.type) {
		case 'FETCH_ACCOUNTS':
          return {accounts: action.payload}
        default:
          return state //at least returns some version of state
          
	}

//reducer is a function 
//state as object vs array
//updates the state based on the action 

}