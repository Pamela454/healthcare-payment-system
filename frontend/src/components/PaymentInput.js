import React from 'react'

class PaymentInput extends React.Component {

	state = {}

	handleChange = (event) => {
		this.setState({
			name: event.target.value 
		})

	}


	render() {
		return {
			<div>
			   <form>
			     <label>Payment Amount</label>
			     <input type='text' placeholder='Amount' onChange={this.handleChange()}/>
			     <label>Credit Card Number</label>
			     <input type='text' placeholder='Credit Card Number' />
			     <input type="submit"/>
			   </form>
			</div>
		}
	}
}