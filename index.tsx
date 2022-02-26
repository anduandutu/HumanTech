import React from "react";
import ReactDOM from "react-dom";
import "core-js";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./src/constants/Store";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/table/lib/css/table.css";
import "normalize.css";
import App from "./App";
import { Provider } from "react-redux";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <Router basename="eduConnect">
      <React.Suspense fallback={loading}>
        <App />
      </React.Suspense>
    </Router>
  </Provider>,
  document.getElementById("root")
);
