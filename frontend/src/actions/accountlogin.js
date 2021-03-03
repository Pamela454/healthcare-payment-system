export const login = (account) => {
  return {
    type: "SET_CURRENT_ACCOUNT",
    account: account
  };
};

//type and payload property 
//action creator, function that returns an action 
//thunk allows return of function instead of object. Function receives dispatch function and can dispatch multiple actions. 