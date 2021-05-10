import { getAccount } from "./currentAccount";

export const addPayment = (payment) => {
  return {
    type: "ADD_PAYMENT",
    payload: payment,
  };
};

export const newPayment = (paymentData, history) => {
  return (dispatch) => {
    const url = `http://localhost:3001/api/v1/accounts/${paymentData.account_id}/payments/new`;
    return fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentData),
    })
      .then((res) => res.json())
      .then((payment) => {
        console.log(payment);
        if (payment.error) {
          alert("error");
        } else {
          dispatch(addPayment(payment.data));
          console.log(payment.data);
          //call additional action to update account
          dispatch(getAccount(payment.data, history));
          //history.push(`/accounts/${paymentData.account_id}`);
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
