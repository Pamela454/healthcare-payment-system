export default function departmentsReducer(state = null, action) {  //combines current state and action 
	switch (action.type) {
    case 'SET_DEPARTMENT': 
    console.log(action.departments)
          return action.departments
    case 'ADD_DEPARTMENT': 
          
          
    case 'DELETE_DEPARTMENT': //at least returns some version of state
          
    default:
          return state //never return null 
    }       
}