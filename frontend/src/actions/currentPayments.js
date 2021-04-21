export const newPayment = (paymentData, history) => {
  return (dispatch) => {
    return fetch(
      //${paymentData.account_id}
      "http://localhost:3001/api/v1/accounts/1/payments/new",
      {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      }
    )
      .then((res) => res.json())
      .then((payment) => {
        console.log(payment);
        if (payment.error) {
          alert("error");
        } else {
          dispatch({ type: "ADD_PAYMENT", payload: payment });
          history.push(`/accounts/${paymentData.account_id}`);
        }
      })
      .catch(console.log);
  };
};

/*let chargeToken = this.props.stripe.createToken({name: "Name"})
  let charge = {
     amount: form.amount,
     cardnumber: form.cardnumber,
     expiration: form.expiration,
     cvc: form.cvc,
     token: chargeToken.token.id 
  } */
