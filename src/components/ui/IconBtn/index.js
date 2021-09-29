import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableRipple } from "react-native-paper";

const IconBtn = (props) => {
  return (
    <TouchableRipple
      style={styles.around}
      onPress={props.onPress}
      rippleColor={props.color}
    >
      {props.children}
    </TouchableRipple>
  );
};

export default IconBtn;

const styles = StyleSheet.create({
  around: {
    padding: 12,
    borderRadius: 500,
  },
});
