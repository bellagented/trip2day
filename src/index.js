import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./Pages/redux/uploadFile/root-reducer";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./Pages/Components/auth/auth0-provider-with-history";

const middleware = [thunk];
const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnchancers(applyMiddleware(...middleware))
);

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
