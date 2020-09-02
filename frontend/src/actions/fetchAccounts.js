
export function fetchAccounts() {
	return (dispatch) => {
    fetch('http://localhost:3000/api/v1/accounts')
    .then(resp => resp.json())
    .then(accounts => dispatch({
       type: 'FETCH_ACCOUNTS',
       payload: accounts
    })) //this is an object used to update the store 
  }
}

//what is dispatched to reducer is an action object. then returns new verion of state. 