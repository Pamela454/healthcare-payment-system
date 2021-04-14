import React from 'react'
import { useState } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {loadStripe} from '@stripe/stripe-js';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import CardSection from './CardSection';
import {injectStripe} from 'react-stripe-elements';
import { newPayment } from "../actions/currentPayments";

//form data available in local state or store? 
//class component, local state holding 
const PaymentNew = (props) => {

  const [form, setForm] = useState({
    amount: ''
  });

  //const accountId = this.props

  const stripe = useStripe();
  const elements = useElements();

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

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make  sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);

    if (result.error) {
      // Show error to your customer.
      console.log(result.error.message);
    } else {
      // Send the token to your server.
      // This function does not exist yet; we will define it in the next step.
      stripeTokenHandler(result.token);
    }
  };

 async function stripeTokenHandler(token) {
  const paymentData = {token: token.id};

  // Use fetch to send the token ID and any other payment data to your server.
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  const response = await fetch('/charge', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(paymentData),
  });

  // Return and display the result of the charge.
  return response.json();
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

export default withRouter(connect(mapStateToProps, {newPayment})(PaymentNew));
