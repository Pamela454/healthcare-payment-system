//const initialState = {
  //name: '',
  //password: ''
//};


export default function loginFormReducer(state = null, action) {
  switch (action.type) {
    case "SET_CURRENT_ACCOUNT":
      return action.account 
    case "CLEAR_CURRENT_ACCOUNT":
      return state
    default:
      return state 
    };
}

