export const setCurrentAccount = (account) => {
	console.log(account)
  return {
    type: "SET_CURRENT_ACCOUNT",
    account: account 
  };
};

export const clearCurrentAccount = (account) => {
	return {
		type: "CLEAR_CURRENT_ACCOUNT"
	};
};

//type and payload property 
//action creator, function that returns an action 
//thunk allows return of function instead of object. Function receives dispatch function and can dispatch multiple actions. 

//needs to be revised 
export const getCurrentAccount = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/get_current_account", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(account => {
        if (account.error) {
          alert("error");
        } else {
          dispatch(setCurrentAccount(account));
        }
      })
      .catch(console.log);
  };
};

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

export const logout = () => {
    //localStorage.removeItem("token")
    //this.setState({
      //account: null,
      //secrets: [] //is this needed? 
    //})
    return dispatch => {
    	dispatch(clearCurrentAccount());
    	return fetch("http://localhost:3001/api/v1/logout", {
    		credentials: "include",
    		method: "DELETE"
    	});
    };
  }
