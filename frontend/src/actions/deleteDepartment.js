export const deleteDepartment = (departmentId, accountId) => {

	return (dispatch) => {
		return fetch(`http://localhost:3000/api/v1/accounts/${accountId}/departments/${departmentId}`, {
			method: 'DELETE'
		})
		.then(response => response.json())
		.then(account => dispatch({type: 'DELETE_TRANSACTION', payload: account}))
	}
}
