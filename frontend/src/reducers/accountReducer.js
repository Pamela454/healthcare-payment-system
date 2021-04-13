//accepts action object
export default function accountReducer(state = null, action) {  //combines current state and action 
	switch (action.type) {
    case 'ADD_ACCOUNT': //creates a new object 
          return action.payload
    default:
          return state //never return null 
    }       
}

//reducer is a function 
//state as object vs array
//updates the state based on the action 
//switch case statement so as not to clutter code with many if else statements 
