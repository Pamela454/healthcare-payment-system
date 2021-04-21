export const addPayment = (payment) => {
  console.log("addPayment", payment);
  return {
    type: "ADD_PAYMENT",
    payload: payment,
  };
};

export const newPayment = (paymentData, history) => {
  console.log("newPayment.paymentData is: ");
  console.log(paymentData);
  console.log("newPayment.history is: ");
  console.log(history);

  return (dispatch) => {
    console.log("about to fetch!");

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
          console.log(payment.data);
          dispatch(addPayment(payment.data));
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
