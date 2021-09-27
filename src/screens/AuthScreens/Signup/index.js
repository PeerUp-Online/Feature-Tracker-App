import React from "react";
import { StyleSheet, View } from "react-native";
import { Caption, Headline, Subheading } from "react-native-paper";

import { PrimaryButton } from "../../../components/ui/Button";
import { PrimaryInput } from "../../../components/ui/Input";

const SignupScreen = (props) => {
  return (
    <View style={styles.container}>
      <Subheading>Welcome to</Subheading>
      <Headline>Feature Tracker</Headline>
      <View style={styles.authContainer}>
        <View style={styles.spacer}>
          <Subheading style={styles.subheading}>Signup Now!</Subheading>
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
            Register
          </PrimaryButton>
        </View>
        <View style={styles.spacer}>
          <Caption style={styles.subheading}>Or</Caption>
        </View>
        <View style={styles.spacer}>
          <PrimaryButton
            mode="outlined"
            icon="account-plus"
            onPress={() => props.navigation.navigate("Login")}
          >
            Login here
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

export default SignupScreen;
