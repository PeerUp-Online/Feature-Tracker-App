import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

const PrimaryButton = (props) => {
  return (
    <Button
      icon={props.icon}
      mode={props.mode}
      contentStyle={{ height: 58 }}
      onPress={props.onPress}
      labelStyle={props.mode === "contained" && { color: "#fff" }}
    >
      {props.children}
    </Button>
  );
};

export default PrimaryButton;
