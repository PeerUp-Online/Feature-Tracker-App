import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Headline, Subheading, TextInput } from "react-native-paper";

import theme from "../../../theme";

const LoginScreen = () => {
  const [text, setText] = React.useState("");
  return (
    <View style={styles.container}>
      <Subheading>Welcome to</Subheading>
      <Headline>Feature Tracker</Headline>
      <View style={styles.authContainer}>
        <TextInput
          mode="outlined"
          label="Email"
          value={text}
          onChangeText={(char) => setText(char)}
        />
        <TextInput
          mode="outlined"
          label="Password"
          value={text}
          onChangeText={(char) => setText(char)}
        />
        <Button
          icon="account-plus"
          mode="contained"
          contentStyle={{ height: 60 }}
          onPress={() => console.log("Pressed")}
          labelStyle={{ color: "#fff" }}
        >
          Register
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7F8FD",
  },
  authContainer: {
    width: "70%",
  },
});

export default LoginScreen;
