import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "App";

import store from "stores";

import "sass/main.scss";

import registerServiceWorker from "registerServiceWorker";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

registerServiceWorker();
