import { StatusBar } from "expo-status-bar";
import React from "react";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { Route } from "react-router";
import LoginPage from "./src/views/LoginView/LoginPage";
import MainEduPage from "./src/views/MainEduPageView/MainEduView";

const App = (loggedIn: any) => {
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
