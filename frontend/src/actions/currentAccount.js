//action creators 

export const setCurrentAccount = (account) => {
      console.log(account)
  return {
    type: "SET_CURRENT_ACCOUNT",
    payload: account
  };
};

export const logout = () => {
	return {
		type: "CLEAR_CURRENT_ACCOUNT"
	};
};

//type and payload property 
//action creator, function that returns an action 
//thunk allows return of function instead of object. Function receives dispatch function and can dispatch multiple actions. 

//needs to be revised 
export const loggedIn = (history) => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/logged_in", {
      method: "GET",
      credentials: 'same-origin',
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(account => {
        if (account.error) {
          alert("error");
        } else {
          console.log(account.data)
          localStorage.setItem("loggedIn", true); //can only set string, JSON.stringify to convert 
          dispatch(setCurrentAccount(account.data))
          history.push(`/accounts/${account.data.id}`)
        }
      })
      .catch(console.log);
 };
}

export const login = (form, history) => {
	return dispatch => {
		return fetch("http://localhost:3001/api/v1/login", {
			method: "POST",
      credentials: 'same-origin',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(form)
		})
			.then(res => res.json())
			.then(account => {
				console.log(account)
				if (account.error || account === null || account === undefined) {
					console.log("no")
				} else {
          console.log("yes")
          console.log(account.data)
          localStorage.setItem("loggedIn", true);
					dispatch(setCurrentAccount(account.data))
          history.push(`/accounts/${account.data.id}`)
				}
			})
			.catch(console.log);
	}
}

export const signup = (form, history) => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/signup", {
      method: "POST",
      credentials: 'same-origin',
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
          history.push(`/accounts/${account.data.id}`)
        }
      })
      .catch(console.log);
  }
}

//export const logout = () => {
    //return dispatch => {
      //dispatch(clearCurrentAccount());
    	//return fetch("http://localhost:3001/api/v1/logout", {
    		//credentials: 'same-origin',
    		//method: "DELETE"
    	//})
    //};
  //}
