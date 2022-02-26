import { StatusBar } from "expo-status-bar";
import React from "react";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import UserService from "./src/requestMaker/UserService";
export default function App() {
  const [currUsers, setCurrentUsers] = useState([]);

  useEffect(() => {}, []);

  const showNoUsers = () => {
    UserService.getUserList()
      .then((resp: any) => {
        console.log(resp.data);
        setCurrentUsers(resp.data);
      })
      .catch((err: any) => {
        console.log(err.data);
      });
  };

  return (
    <View style={styles.container}>
      <Button
        onPress={showNoUsers}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <p>{currUsers.length}</p>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
