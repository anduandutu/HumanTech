import React from "react";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { Route, Routes } from "react-router";
import LoginPage from "./views/LoginView/LoginPage";
import MainEduPage from "./views/MainEduPageView/MainEduView";
import { FocusStyleManager } from "@blueprintjs/core";

const App = (loggedIn: boolean) => {
  FocusStyleManager.onlyShowFocusOnTabs();
  return (
    <div className="app">
      <Routes>
        {loggedIn ? (
          <Route path="/" element={<MainEduPage></MainEduPage>}></Route>
        ) : (
          <Route path="*" element={<LoginPage></LoginPage>}></Route>
        )}
      </Routes>
    </div>
  );
};

const mapStateToProps = (userReducer: any) => ({
  loggedIn: userReducer.loggedIn,
});

export default connect(mapStateToProps)(App);
