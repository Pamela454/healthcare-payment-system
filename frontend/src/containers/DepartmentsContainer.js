import React from 'react'
import {connect} from 'react-redux'



class DepartmentsContainer extends React.Component {
    //getting departments from the backend
	componentDidMount() {
        this.props.fetchDepartments()
	}


	render () {
		return (
			<div>
				DepartmentsContainer 
			</div>
			)
	}
}
//is this needed if not displaying list of accounts?
const mapStateToProps = state => {
	return {
		departments: state.departments //accounts located inside the state
	}
}

export default connect(mapStateToProps, {fetchDepartments})(DepartmentsContainer)