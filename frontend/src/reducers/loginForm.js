const initialState = {
  name: '',
  password: ''
};


export default function loginFormReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CURRENT_ACCOUNT":
      return action.formData
    case "CLEAR_CURRENT_ACCOUNT":
      return initialState
    default:
      return state 
    };
}

