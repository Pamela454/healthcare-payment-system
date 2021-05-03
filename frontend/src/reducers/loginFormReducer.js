const initialState = {
  account: {
    //added nesting within account
    name: "",
    password: "",
  },
};

export default function loginFormReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CURRENT_ACCOUNT":
      return {
        ...state,
        account: action.payload,
      }; //is this overwriting state?
    case "CLEAR_CURRENT_ACCOUNT":
      localStorage.removeItem("loggedIn");
      return initialState;
    default:
      break;
  }
  return state;
}
