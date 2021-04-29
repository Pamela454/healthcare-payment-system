const initialState = {
payments: [],
};

export default function paymentsReducer(state = initialState, action) {
	console.log(action);
	switch (action.type) {
		case "ADD_PAYMENT": //creates a new object
			return {
				...state, payments: action.payload 
			}
			// {...state, : action.payload., : action.payload.}
		default:
			break;
	}
	return state; //never return null
}
