

export function fetchAccounts(action) {
	return (dispatch) => {
    fetch('http://localhost:3000/api/v1/accounts')
    .then(resp => resp.json())
    .then(accounts => dispatch({
       type: 'FETCH_ACCOUNTS'
       payload: accounts
    })) //this is an object used to update the store 
  }
}