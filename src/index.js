import ReactDOM from "@babel/core";
import App from "./App";
import "core-js";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./constants/Store";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/table/lib/css/table.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
import "@blueprintjs/select/lib/css/blueprint-select.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "normalize.css";
import { Provider } from "react-redux";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.Suspense fallback={loading}>
        <App />
      </React.Suspense>
    </Router>
  </Provider>,
  document.getElementById("root")
);
