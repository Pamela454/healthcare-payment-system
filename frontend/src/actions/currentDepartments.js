export const setDepartments = (departments) => {
	console.log(departments)
  return {
    type: "GET_DEPARTMENTS",
    departments
  };
};

export const getDepartments = (accountId, history) => {
	return (dispatch) => {
		console.log(accountId)
		console.log(history)
		fetch(`http://localhost:3001/api/v1/accounts/${accountId}/departments`, {
			method: "GET",
      credentials: 'same-origin',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify()
		})
			.then(res => res.json())
			.then(response => {
				if (response.error || response === null || response === undefined) {
					console.log("no")
				} else {
          console.log("yes")
          		console.log(response)
          dispatch(setDepartments(response.data))
          history.push(`/accounts/${accountId}/departments`)
				}
			})
			.catch(console.log);
	}
}

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

export const deleteDepartment = (departmentId, accountId) => {
	return (dispatch) => {
		return fetch(`http://localhost:3000/api/v1/accounts/${accountId}/departments/${departmentId}`, {
			method: 'DELETE'
		})
		.then(response => response.json())
		.then(account => dispatch({type: 'DELETE_TRANSACTION', payload: account}))
	}
}
