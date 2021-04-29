import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
//import { useState } from "react";
//import { loadStripe } from "@stripe/stripe-js";
import { connect } from "react-redux";
import { loggedIn } from "./actions/currentAccount.js";
//import { Elements } from "@stripe/react-stripe-js";
//import PaymentNew from "./components/PaymentNew";
import AccountContainer from "./containers/AccountContainer";
import NavBar from "./components/NavBar.js";
import DepartmentsContainer from "./containers/DepartmentsContainer";
import PaymentsContainer from "./containers/PaymentsContainer";
import Login from "./components/registrations/Login";
import Signup from "./components/registrations/Signup";
import "./App.scss";
//class componenets automatically have access to props
//elements represent DOM tags
//All React components must act like pure functions with respect to their props.
function App(props) {
  //const [stipePromise,setStripePromise] = useState(() => loadStripe(''))
  //const stripePromise = useMemo(() => loadStripe('', { stripeAccount }),[stripeAccount],)
  //const stripePromise = loadStripe('pk_test_tZpOKpVsO8ccsjSLbrnuwwEH');
  console.log(props);
  const currentAccount = localStorage.getItem("loggedIn");
  return (
    <div className="Appclass text-center">
      <NavBar currentAccount={currentAccount} />
      {/*<Elements stripe={stripePromise} > */}
      <div>
        <h2>{currentAccount ? "You are signed in" : "Not logged in"} </h2>
      </div>
      <Switch>
        <Route exact path="/api/v1/login" render={() => <Login />} />
        <Route exact path="/api/v1/signup" render={() => <Signup />} />
        <Redirect from="/logout" to="api/v1/login" />
        <Route
          exact
          path="/accounts/:id"
          render={() => {
            return <AccountContainer />;
          }}
        />
        <Route
          exact
          path="/accounts/:id/departments"
          render={() => {
            return <DepartmentsContainer />;
          }}
        />
        <Route
          path="/accounts/:id/payments"
          render={() => {
            return <PaymentsContainer />;
          }}
        />
      </Switch>
      {/* </Elements> */}
    </div>
  );
}

export default withRouter(connect(null, { loggedIn })(App));
