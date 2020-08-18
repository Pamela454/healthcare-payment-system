// render other components, can have other functions inside them. Typically class components. 
import React from 'react'
import {connect} from 'react-redux'
import {fetchAccounts} from '../actions/fetchAccounts'




class AccountsContainer extends React.Component {
    //getting accounts from the backend
	componentDidMount() {
        this.props.fetchAccounts()
	}


	render () {
		return (
			<div>
				Accounts Container 
			</div>
			)
	}
}
//is this needed if not displaying list of accounts?
const mapStateToProps = state => {
	return {
		accounts: state.accounts //accounts located inside the state
	}
}

export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer)