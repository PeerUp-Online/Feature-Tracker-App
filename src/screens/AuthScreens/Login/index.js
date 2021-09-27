import React from "react";
import { StyleSheet, View } from "react-native";
import { Caption, Headline, Subheading } from "react-native-paper";

import { PrimaryButton } from "../../../components/ui/Button";
import { PrimaryInput } from "../../../components/ui/Input";

const LoginScreen = (props) => {
  return (
    <View style={styles.container}>
      <Subheading>Welcome to</Subheading>
      <Headline>Feature Tracker</Headline>
      <View style={styles.authContainer}>
        <View style={styles.spacer}>
          <Subheading style={styles.subheading}>Login</Subheading>
        </View>
        <View style={styles.spacer}>
          <PrimaryInput label="Email" />
        </View>
        <View style={styles.spacer}>
          <PrimaryInput label="Password" />
        </View>
        <View style={styles.spacer}>
          <PrimaryButton
            mode="contained"
            icon="account-plus"
            onPress={() => console.log("Pressed")}
          >
            Login
          </PrimaryButton>
        </View>
        <View style={styles.spacer}>
          <Caption style={styles.subheading}>Or</Caption>
        </View>
        <View style={styles.spacer}>
          <PrimaryButton
            mode="outlined"
            icon="account-plus"
            onPress={() => props.navigation.navigate("Signup")}
          >
            Signup here
          </PrimaryButton>
        </View>
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
    width: "85%",
  },
  subheading: {
    textAlign: "center",
  },
  spacer: {
    marginTop: 16,
  },
});

export default LoginScreen;
