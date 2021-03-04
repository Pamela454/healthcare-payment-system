import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux' //wrapped in provider so has access to store
import { BrowserRouter} from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux' //from imported redux library
import thunk from 'redux-thunk' //asynchrounos actions 
import accountReducer from './reducers/accountReducer'
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm'

//manage independent parts of the state. Single reducing function to pass to create store. 
const reducers = combineReducers({
  accountReducer,
  loginForm,
  signupForm
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  //dev tools

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk))) //method provided by redux library 
//asynchronous use of dispatch
//containers act more like parent components, contain other componenets
//store - data stored globally. could create in separate file and import. 
//reducer - what to do with store based on certain actions. returns a new version of the store. 
//below grants app access to the store 
//able to dispatch actions throughout the component tree. alerts when change in state. 
ReactDOM.render(
    <Provider store={store}> 
    <BrowserRouter> 
		<App />
	</BrowserRouter>,
	</Provider>, 
	document.getElementById('root'));
//router gives any child access to setting up routes and using links. children all wrapped in router
//reducer tells what to do with store based on certain actions 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
