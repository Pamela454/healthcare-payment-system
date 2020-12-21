export const login = (account) => {
  return {
    type: "SET_CURRENT_ACCOUNT",
    account: account
  };
};

//type and payload property 
//action creator, function that returns an action 