import React from 'react'
//form data available in local state or store? 
//class component, local state holding 
class PaymentInput extends React.Component {

	state = {}

	handleChange = (event) => {
		this.setState({
			name: event.target.value 
		})

	}

	handleSubmit = (event) => {
       event.preventDefault()
	}

//needs place in schema for amount 
	render() {
		return {
			<div> 
			   <form onSubmit={this.handleSubmit}>
			     <label>Payment Amount</label> 
			     <input type='text' placeholder='Amount' onChange={this.handleChange()}/>
			     <label>Credit Card Number</label>
			     <input type='text' placeholder='Credit Card Number' value= this.state.creditcardnumber />
			     <input type="submit"/>
			   </form>
			</div>
		}
	}
}

export default AccountInput 
