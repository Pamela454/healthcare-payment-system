import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux' //wrapped in provider so has access to store
import accountReducer from './reducers/accountReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

let store = createStore(accountReducer, composeEnhancers(applyMiddleware(thunk)))
//containers act more like parent components
//store - data stored globally. could create in separate file and import. 
//reducer - what to do with store based on certain actions. returns a new version of the store. 

ReactDOM.render(
    <Provider store={store}>
	<App />
	</Provider>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
