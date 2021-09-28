import React from "react";
import { StyleSheet, View, Platform, KeyboardAvoidingView } from "react-native";
import { Caption, Divider, Headline } from "react-native-paper";

import { PrimaryInput } from "../../components/ui/Input";
import { PrimaryButton } from "../../components/ui/Button";
import Upvote from "../../components/svg/Upvote";
import AddProd from "../../components/svg/AddProd";

import theme from "../../theme";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxOne}>
        <Upvote height={150} width={150} />
        <Headline>Product Feature</Headline>
        <Caption>Enter product code to vote and suggest feature</Caption>
        <View style={styles.inputContainer}>
          <PrimaryInput label="Enter Product Code" />
        </View>
        <View style={styles.inputContainer}>
          <PrimaryButton mode="contained">Show Product</PrimaryButton>
        </View>
      </View>
      <Divider />
      <View style={styles.boxTwo}>
        <Headline>Add Product</Headline>
        <Caption>
          Add your product and get feature requests from your users
        </Caption>
        <View style={styles.inputContainer}>
          <PrimaryButton mode="outlined">Add A product</PrimaryButton>
        </View>
        <AddProd width={200} height={200} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
  },
  boxOne: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: "55%",
  },
  inputContainer: {
    width: "85%",
    marginTop: 15,
  },
  boxTwo: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.background,
    minHeight: "45%",
  },
});

export default WelcomeScreen;
