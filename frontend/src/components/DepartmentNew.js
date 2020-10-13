import React from 'react'
import {connect} from 'react-redux'
import {newDepartment} from '../actions/newDepartment'


class DepartmentNew extends React.Component {

	state = {
		name: '',
		service: '',
		charge: ''
	}

    handleChange = (event) => {
      this.setState({
      	[event.target.name]: event.target.value 
      })
    }

    handleSubmit = (event) => {
	 	event.preventDefault()
	 	this.props.newDepartment(this.state, this.props.account.id)
        this.setState({
          name: '', 
          service: '',
          charge: ''
        })
	 }

	render() {
		return (
           <div>
             <form onSubmit={this.handleSubmit}>
                <label>Department New</label>
                <label>Name:</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                <label>Service:</label>
                <input type="text" name="service" value={this.state.service} onChange={this.handleChange}/>
                <label>Charge:</label>
                <input type="text" name="charge" value={this.state.charge} onChange={this.handleChange}/>
                <input type="submit"/>
             </form> 
           </div>
		)
	}
}

export default connect(null, {newDepartment})(DepartmentNew)