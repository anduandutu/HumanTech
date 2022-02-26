import { StatusBar } from "expo-status-bar";
import React from "react";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { Route } from "react-router";
import LoginPage from "./src/views/LoginView/LoginPage";
import MainEduPage from "./src/views/MainEduPageView/MainEduView";
import { FocusStyleManager } from "@blueprintjs/core";
import ReactDOM from "react-dom";
import "core-js";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./src/constants/Store";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/table/lib/css/table.css";
import "normalize.css";
import { Provider } from "react-redux";

export const App = (loggedIn: any) => {
  FocusStyleManager.onlyShowFocusOnTabs();
  return (
    <div className="app">
      {loggedIn ? (
        <Route path="/" element={<MainEduPage></MainEduPage>}></Route>
      ) : (
        <Route path="*" element={<LoginPage></LoginPage>}></Route>
      )}
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const mapStateToProps = ({ userReducer: { loggedIn } }) => ({ loggedIn });

export default connect(mapStateToProps)(App);

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
