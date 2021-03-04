export const updateSignupForm = (formData) => {
	return {
		type: "UPDATE_SIGNUP_FORM",
		formData
	};
};

export const signup = (credentials, history) => {
	return dispatch => {
		const accountInfo = {
			account: credentials
		};

		return fetch("http://localhost:3000/api/v1/accounts", {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			method: "POST",
			credentials: "include",
			body: JSON.stringify(accountInfo)
		})
		  .then(response => response.json())
		  .then(account => {
			if (account.error) {
				alert(account.error);
			} else {
				dispatch({type: 'ADD_ACCOUNT', payload: account});
				history.push("/");
			}
		  })
		.catch(console.log);
	};
};

