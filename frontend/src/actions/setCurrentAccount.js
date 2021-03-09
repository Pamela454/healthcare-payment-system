export const setCurrentAccount = (account) => {
	console.log(account)
  return {
    type: "SET_CURRENT_ACCOUNT",
    account: account 
  };
};

//type and payload property 
//action creator, function that returns an action 
//thunk allows return of function instead of object. Function receives dispatch function and can dispatch multiple actions. 

export const login = credentials => {
	//console.log(credentials)
	return dispatch => {
		return fetch("http://localhost:3001/api/v1/login", {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(credentials)
		})
			.then(res => res.json())
			.then(account => {
				if (account.error) {
					console.log("no")
				} else {
					dispatch(setCurrentAccount(account))
				}
			})
			.catch(console.log);
	}
}