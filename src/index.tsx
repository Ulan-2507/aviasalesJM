import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/app";
import store from "./stor";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
