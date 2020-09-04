export const newDepartment = (department, accountId) => {


	return (dispatch) => {
		fetch(`http://localhost:3000/api/v1/accounts/${accountId}/departments`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(department)
		})
		.then(response => response.json())
		.then(account => dispatch({type: 'ADD_DEPARTMENT', payload: account}))
	}
}