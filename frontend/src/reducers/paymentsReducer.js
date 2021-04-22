//const initialState = {
//payments: [],
//};
export default function paymentsReducer(state = null, action) {
	console.log("paymentsReducer.action: ");
	switch (action.type) {
		case "ADD_PAYMENT": //creates a new object
			console.log(action);
			return action.payload;
		default:
			return state; //never return null
	}
}
