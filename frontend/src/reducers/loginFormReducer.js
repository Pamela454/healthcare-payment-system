const initialState = {
  name: "",
  password: "",
};


export default function loginFormReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CURRENT_ACCOUNT":
    console.log(action.payload.attributes)
      return action.payload
    case "CLEAR_CURRENT_ACCOUNT":
    localStorage.removeItem("loggedIn")
      return initialState
    default:
      return state
    };
}

