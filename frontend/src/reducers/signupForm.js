const initialState = {
	name: "",
	password: "",
	status: ""
};

export default function signupReducer(state = initialState, action) {
	switch (action.type) {
    case "UPDATE_SIGNUP_FORM":
      return action.formData;
    case "ADD_ACCOUNT":
      return action.account;
    default:
      return state;
  }
}