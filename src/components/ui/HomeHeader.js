import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Caption, Headline, Avatar } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

import IconBtn from "./IconBtn";
import theme from "../../theme";

const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.userDetails}>
        <View style={styles.usrImgContainer}>
          <Avatar.Image
            size={48}
            source={{ uri: "https://picsum.photos/700" }}
          />
        </View>
        <View>
          <Caption style={styles.whiteColor}>Welcome</Caption>
          <Headline style={styles.whiteColor}>Username</Headline>
        </View>
      </View>
      <View style={styles.headerIcons}>
        <IconBtn
          color="rgba(255, 255, 255, .32)"
          onPress={() => console.log("Icon Btn Press")}
        >
          <Feather name="grid" size={18} color="#fff" />
        </IconBtn>
        <IconBtn
          color="rgba(255, 255, 255, .32)"
          onPress={() => console.log("Icon Btn Press")}
        >
          <Feather name="box" size={18} color="#fff" />
        </IconBtn>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 20,
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  userDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  usrImgContainer: {
    marginRight: 10,
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 100,
  },
  whiteColor: {
    color: "#fff",
  },
});
