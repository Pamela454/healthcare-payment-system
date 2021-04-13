export const newPayment = (accountId, form) => {
  console.log(form)
  let chargeToken = this.props.stripe.createToken({name: "Name"})
  let charge = {
     amount: form.amount,
     cardnumber: form.cardnumber,
     expiration: form.expiration,
     cvc: form.cvc,
     token: chargeToken.token.id 
  }

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/accounts/${accountId}/payments/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        charge: charge 
      })
    })
    .then(response => response.json())
    .then(payment => dispatch({type: 'ADD_PAYMENT', payload: payment}))
  }
}