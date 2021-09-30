import React from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import { Caption, Headline, Surface } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

import theme from "../../../theme";

const InfoCard = (props) => {
  return (
    <Surface style={styles.infoBox}>
      <View style={styles.info}>
        <Feather name={props.icon} size={38} color={theme.colors.primary} />
        <View style={styles.numBox}>
          <Headline style={[styles.whiteColor, styles.num]}>
            {props.count}
          </Headline>
        </View>
      </View>
      <Caption style={[styles.whiteColor, styles.text]}>
        {props.boxText}
      </Caption>
    </Surface>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  infoBox: {
    textAlign: "center",
    padding: 10,
    backgroundColor: theme.colors.accent,
    borderRadius: 8,
    elevation: 12,
    width: Dimensions.get("window").width / 2.5,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  num: {
    fontSize: 38,
    padding: 12,
  },
  numBox: {
    marginTop: 20,
  },
  text: {
    textAlign: "center",
  },
  whiteColor: {
    color: "#fff",
  },
});
