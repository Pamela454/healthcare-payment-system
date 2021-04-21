import React, { useState } from "react"; //for function components
import { Form } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
//import {loadStripe} from '@stripe/stripe-js';
//import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
//import CardSection from './CardSection';
//import {injectStripe} from 'react-stripe-elements';
import { newPayment } from "../actions/currentPayments";
//form data available in local state or store?
//class component, local state holding
const PaymentNew = (props) => {
  console.log("paymentnew is: ");
  console.log(props);

  const [newPaymentFormData, setForm] = useState({
    amount: "",
    cardnumber: "",
    expiration: "",
    cvc: "",
    account_id: props.match.params.id,
  });

  //const stripe = useStripe();
  //const elements = useElements();

  const handlePaymentFormChange = (event, target) => {
    setForm({
      ...newPaymentFormData,
      [target]: event.target.value,
    });
  };

  const handlePaymentFormSubmit = (event) => {
    event.preventDefault();
    console.log(props);
    console.log(newPaymentFormData);
    props.newPayment(newPaymentFormData, props.history);
  };

  /*const handlePaymentFormSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      alert('Stripe is not loaded yet.');
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
      console.log(result)
      // Send the token to your server.
      // This function does not exist yet; we will define it in the next step.
      console.log(result.token)
      stripeTokenHandler(result.token);
    }
  };

 async function stripeTokenHandler(token) {
  const paymentData = {token: token.id};
  // Use fetch to send the token ID and any other payment data to your server.
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  const response = await fetch('http://localhost:3000/api/v1/accounts/${accountId}/charges', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(paymentData),
  });
    console.log(response)
  // Return and display the result of the charge.
  return response.json();
}*/

  return (
    <div className="NewPayment">
      <h1 class="text-center">New Payment</h1>
      <body class="text-center">
        <Form onSubmit={handlePaymentFormSubmit} class="form-inline">
          <div class="form-group align-items-center">
            <label for="inputamount" class="form-label">
              Amount:{" "}
            </label>
            <br></br>
            <input
              placeholder="amount"
              type="text"
              class="form-control-sm"
              name="amount"
              autoComplete="on"
              value={newPaymentFormData.amount}
              onChange={(event) => handlePaymentFormChange(event, "amount")}
            />
          </div>
          <div class="form-group  align-items-center">
            <label for="inputcardnumber" class="form-label">
              Card Number:{" "}
            </label>
            <br></br>
            <input
              placeholder="cardnumber"
              type="text"
              name="card number"
              autoComplete="on"
              value={newPaymentFormData.cardnumber}
              onChange={(event) => handlePaymentFormChange(event, "cardnumber")}
            />
          </div>
          <br />
          <div class="form-group  align-items-center">
            <label for="inputexpiration" class="form-label">
              Expiration:{" "}
            </label>
            <br></br>
            <input
              placeholder="expiration"
              type="text"
              name="expiration"
              autoComplete="on"
              value={newPaymentFormData.expiration}
              onChange={(event) => handlePaymentFormChange(event, "expiration")}
            />
          </div>
          <br />
          <div class="form-group  align-items-center">
            <label for="inputcvc" class="form-label">
              CVC:{" "}
            </label>
            <br></br>
            <input
              placeholder="cvc"
              type="text"
              name="cvc"
              autoComplete="on"
              value={newPaymentFormData.cvc}
              onChange={(event) => handlePaymentFormChange(event, "cvc")}
            />
          </div>
          <br />
          <button type="submit" class="btn btn-outline-primary">
            Make Payment
          </button>
          <br></br>
          <br></br>
        </Form>
      </body>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    newPaymentFormData: state.newPaymentFormData,
  };
};

export default withRouter(connect(mapStateToProps, { newPayment })(PaymentNew));
