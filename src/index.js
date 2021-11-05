import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

//redux imports
import logger from 'redux-logger';
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducer from './reducers'
import { Provider } from "react-redux";

const store = createStore(reducer, applyMiddleware(logger, thunk))

const { worker } = require('./mocks/browser');
worker.start();

const rootElement = document.getElementById("root");

//testing what is in my store
console.log('STORE CONTENTS IN INDEX APP', store.getState())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);

//Task List:
//1. Add in all necessary components and libary methods.
    //?what are the imports needed?
    /**
     * redux
     * react-redux
     * store / { createStore } from redux
     */

//2. Create a store that includes thunk and logger middleware support.
//3. Wrap the App component in a react-redux Provider element.