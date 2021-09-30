import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import theme from "../../../theme";

const PrimaryButton = (props) => {
  return (
    <Button
      icon={props.icon}
      mode={props.mode}
      contentStyle={styles.btnHeight}
      onPress={props.onPress}
      labelStyle={props.mode === "contained" && styles.labelColor}
      style={props.mode !== "contained" && styles.btnBorder}
    >
      {props.children}
    </Button>
  );
};

const styles = StyleSheet.create({
  btnBorder: {
    borderWidth: 0.2,
    borderColor: theme.colors.accent,
  },
  btnHeight: {
    height: 58,
  },
  labelColor: { color: "#fff" },
});

export default PrimaryButton;
