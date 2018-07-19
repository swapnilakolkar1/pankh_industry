import App from "./App";
import "babel-polyfill";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import MYroute from "./routes";
import "./styles/styles.css";
import "./styles/_custom.scss";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
