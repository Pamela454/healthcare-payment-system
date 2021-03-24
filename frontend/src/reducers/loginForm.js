//const initialState = {
  //name: '',
  //password: ''
//};

export default function loginFormReducer(state = null, action) {
  switch (action.type) {
    case "SET_CURRENT_ACCOUNT":
    console.log(action.payload.attributes)
     if (action.payload) {
      return {...state, account: action.payload.attributes} 
     } else {
      return state
     };
    case "CLEAR_CURRENT_ACCOUNT":
      return null 
    default:
      return state 
    };
}

