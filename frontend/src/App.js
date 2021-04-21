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
function App(props) {
  //const [stipePromise,setStripePromise] = useState(() => loadStripe(''))
  //const stripePromise = useMemo(() => loadStripe('', { stripeAccount }),[stripeAccount],)
  //const stripePromise = loadStripe('pk_test_tZpOKpVsO8ccsjSLbrnuwwEH');
  const currentAccount = localStorage.getItem("loggedIn");
  console.log(currentAccount);
  return (
    <div className="Appclass text-center">
      <NavBar currentAccount={currentAccount} />
      {/*<Elements stripe={stripePromise} > */}
      <div>
        <h2>
          {currentAccount
            ? `${props.loginFormReducer.attributes.name} is signed in`
            : "Not logged in"}{" "}
        </h2>
      </div>
      <Switch>
        <Route
          exact
          path="/api/v1/login"
          render={(props) => <Login {...props} />}
        />
        <Route
          exact
          path="/api/v1/signup"
          render={(props) => <Signup {...props} />}
        />
        <Redirect from="/logout" to="api/v1/login" />
        <Route
          exact
          path="/accounts/:id"
          render={(props) => {
            return <AccountContainer {...props} />;
          }}
        />
        <Route
          exact
          path="/accounts/:id/departments"
          render={(props) => {
            return <DepartmentsContainer {...props} />;
          }}
        />
        <Route
          path="/accounts/:id/payments"
          render={(props) => {
            console.log("paymentscontainer" + JSON.stringify(props));
            return <PaymentsContainer {...props} />;
          }}
        />
      </Switch>
      {/* </Elements> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  //what portion of state to provide to props
  return {
    //executed with each change to the store.
    ...state,
  };
};

export default withRouter(connect(mapStateToProps, { loggedIn })(App));
