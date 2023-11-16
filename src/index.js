import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import rootReducer from "Redux/rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const logger = createLogger();
const store = configureStore({reducer: rootReducer,middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
