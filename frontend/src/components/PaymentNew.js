import React from 'react'
import { useState } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {injectStripe} from 'react-stripe-elements';
import { newPayment } from "../actions/currentPayments";

//form data available in local state or store? 
//class component, local state holding 
const PaymentNew = (props) => {

  const [form, setForm] = useState({
    amount: ''
  });

  console.log(this.props)

  //const accountId = this.props

  const handlePaymentFormChange = (event, target) => {
     setForm({
      ...form,
     [target]: event.target.value, 
    });
  }


  const handlePaymentFormSubmit = (event, accountId) => {
       event.preventDefault()
       newPayment(form, accountId)
  }

  return (
		<div className="NewPayment">
        <h1>New Payment</h1>
        <form onSubmit={handlePaymentFormSubmit}>
          <input
            placeholder="amount"
            type="text"
            name="amount"
            autoComplete="on"
            value={form.amount}
            onChange={(event)=> handlePaymentFormChange(event, "amount")}
          /><br/>
          <input
            placeholder="cardnumber"
            type="text"
            name="card number"
            autoComplete="on"
            value={form.cardnumber}
            onChange={(event)=> handlePaymentFormChange(event, "cardnumber")}
          /><br/>
          <input
            placeholder="expiration"
            type="text"
            name="expiration"
            autoComplete="on"
            value={form.expiry}
            onChange={(event)=> handlePaymentFormChange(event, "expiration")}
          /><br/>
          <input
            placeholder="cvc"
            type="text"
            name="cvc"
            autoComplete="on"
            value={form.cvc}
            onChange={(event)=> handlePaymentFormChange(event, "cvc")}
          /><br/>
        <button placeholder="submit" type="submit">
            Make Payment
          </button> 
          <br></br>     
          <br></br>             
          <div>
          </div>
          </form>
          <div>
        </div>
      </div>
  )
}

/*function InjectedCheckoutForm() {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutForm stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
}*/

const mapStateToProps = state => {
  return {
    form: state.form 
  };
};

export default withRouter(connect(mapStateToProps, { newPayment } ), injectStripe(PaymentNew));
