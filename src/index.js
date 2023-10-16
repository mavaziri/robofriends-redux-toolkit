import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import {
//   legacy_createStore as createStore,
//   applyMiddleware,
//   combineReducers,
// } from "redux";
// import { createLogger } from "redux-logger";
// import ThunkMiddleware from "redux-thunk";
import store from "./store/store";
import "./index.css";
import App from "./containers/App";
// import registerServiceWorker from "./registerServiceWorker";
// import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import "tachyons";

// const logger = createLogger();
// const rootReducer = combineReducers({ searchRobots, requestRobots });
// const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware));
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// registerServiceWorker();
// serviceWorkerRegistration.register();
