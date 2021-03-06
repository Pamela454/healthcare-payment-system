const initialState = {
	departments: [],
};

export default function departmentsReducer(state = initialState, action) {
	//combines current state and action
	console.log(action.departments);
	switch (action.type) {
		case "GET_DEPARTMENTS":
			console.log(action);
			return {
				departments: action.departments,
			};
		default:
			return state; //never return null
	}
}

/*

state = { departments: [] }

state = { departments: [] } // new object wrapper

state = { departments: [] }  // new array in the departments variable

state = { departments: [] } // spreading the initialState's array

state = { departments: [action.payload] } // adding action.payoad to the array

state = { departments: [ [{id:1, attributes: {charge:20, name:"", service:""} }] ] } // adding action.payoad to the array


*/
