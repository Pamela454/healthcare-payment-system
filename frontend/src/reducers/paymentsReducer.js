//const initialState = {
//payments: [],
//};
export default function paymentsReducer(state = null, action) {
	console.log(action);
	switch (action.type) {
		case "ADD_PAYMENT": //creates a new object
			console.log(action.payload);
			return [...state, payment];
		default:
			return state; //never return null
	}
}
