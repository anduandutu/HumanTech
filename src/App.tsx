import React from "react";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { Route, Routes } from "react-router";
import LoginPage from "./views/LoginView/LoginPage";
import MainEduPage from "./views/MainEduPageView/MainEduView";
import { FocusStyleManager } from "@blueprintjs/core";

const App = (loggedIn: any) => {
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
