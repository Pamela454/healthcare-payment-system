//action creators

export const setCurrentAccount = (account) => {
  console.log(account);
  return {
    type: "SET_CURRENT_ACCOUNT", //should this be add account?
    payload: account,
  };
};

export const logout = () => {
  return {
    type: "CLEAR_CURRENT_ACCOUNT",
  };
};

export const fetchedAccounts = (accounts) => {
  console.log(accounts);
  return {
    type: "SET_ACCOUNT_LIST",
    payload: accounts,
  };
};

//type and payload property
//action creator, function that returns an action
//thunk allows return of function instead of object. Function receives dispatch function and can dispatch multiple actions.
//needs to be revised
export const getAccount = (data, history) => {
  //a thunk
  return (dispatch) => {
    console.log(data.relationships.account.data.id);
    return fetch(
      `http://localhost:3001/api/v1/accounts/${data.relationships.account.data.id}`,
      {
        method: "GET",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      }
    )
      .then((res) => res.json())
      .then((account) => {
        if (account.error) {
          console.log(account);
          alert("error");
        } else {
          console.log(account.data.id);
          localStorage.setItem("loggedIn", true); //can only set string, JSON.stringify to convert
          dispatch(setCurrentAccount(account.data));
          history.push(`/accounts/${account.data.id}`);
        }
      })
      .catch(console.log);
  };
};

export const getAllAccounts = () => {
  console.log("hello");
  return (dispatch) => {
    return fetch("http://localhost:3001/api/v1/accounts", {
      method: "GET",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((accounts) => {
        if (accounts.error) {
          console.log(accounts);
          alert("error");
        } else {
          console.log(accounts.data);
          dispatch(fetchedAccounts(accounts.data));
        }
      })
      .catch(console.log);
  };
};

export const login = (form, history) => {
  return (dispatch) => {
    return fetch("http://localhost:3001/api/v1/login", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((account) => {
        console.log(account);
        if (account.error || account === null || account === undefined) {
          console.log("no");
        } else {
          console.log("yes");
          console.log(account.data);
          localStorage.setItem("loggedIn", true);
          dispatch(setCurrentAccount(account.data));
          history.push(`/accounts/${account.data.id}`);
        }
      })
      .catch(console.log);
  };
};

//should we be using async/await?
export const signup = (form, history) => {
  return (dispatch) => {
    console.log("form is: ");
    console.log(form);
    return fetch("http://localhost:3001/api/v1/signup", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json()) //parse JSON
      .then((account) => {
        console.log(account);
        console.log(history);
        if (account.error) {
          console.log("no");
        } else {
          localStorage.setItem("loggedIn", true);
          console.log(account.data);
          dispatch(setCurrentAccount(account.data));
          history.push(`/accounts/${account.data.id}`);
        }
      })
      .catch(console.log);
  };
};
