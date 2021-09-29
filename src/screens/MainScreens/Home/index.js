import React from "react";
import { StyleSheet, View, StatusBar, Dimensions } from "react-native";
import { Caption, Headline } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

import HomeHeader from "../../../components/ui/HomeHeader";
import theme from "../../../theme";

const HomeScreen = () => {
  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.primary}
        barStyle="dark-content"
      />
      <HomeHeader />
      <View style={styles.body}>
        <View style={styles.infoContainer}>
          <View style={styles.infoBox}>
            <View style={styles.info}>
              <Feather name="zap" size={38} color="#fff" />
              <View style={styles.numBox}>
                <Headline style={[styles.whiteColor, styles.num]}>20</Headline>
              </View>
            </View>
            <Caption style={[styles.whiteColor, styles.text]}>
              New Feature Requests
            </Caption>
          </View>
          <View style={styles.infoBox}>
            <View style={styles.info}>
              <Feather name="inbox" size={38} color="#fff" />
              <View style={styles.numBox}>
                <Headline style={[styles.whiteColor, styles.num]}>21</Headline>
              </View>
            </View>
            <Caption style={[styles.whiteColor, styles.text]}>
              New Votes Received
            </Caption>
          </View>
        </View>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 24,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoBox: {
    textAlign: "center",
    padding: 10,
    backgroundColor: theme.colors.accent,
    borderRadius: 8,
    elevation: 16,
    width: Dimensions.get("window").width / 2.5,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 5,
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
