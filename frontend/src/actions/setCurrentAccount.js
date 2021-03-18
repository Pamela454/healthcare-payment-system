//action creators 

export const setCurrentAccount = (account) => {
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
          dispatch(setCurrentAccount(account.data))
      })
      .catch(console.log);
  };
 };
}

export const login = (form, history) => {
	//console.log(credentials)
	return dispatch => {
		return fetch("http://localhost:3001/api/v1/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(form)
		})
			.then(res => res.json())
			.then(account => {
				console.log(account)
				if (account.error) {
					console.log("no")
				} else {
					dispatch(setCurrentAccount(account.data))
          history.push('/')
				}
			})
			.catch(console.log);
	}
}

export const signup = (form, history) => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(account => {
        console.log(account)
        if (account.error) {
          console.log("no")
        } else {
          dispatch(setCurrentAccount(account.data))
          history.push('/')
        }
      })
      .catch(console.log);
  }
}

export const logout = () => {
    return dispatch => {
    	dispatch(clearCurrentAccount());
    	return fetch("http://localhost:3001/api/v1/logout", {
    		credentials: "include",
    		method: "DELETE"
    	});
    };
  }
