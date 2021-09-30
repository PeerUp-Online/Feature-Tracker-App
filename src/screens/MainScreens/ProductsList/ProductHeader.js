import React from "react";
import { StyleSheet, View } from "react-native";
import { Caption, Headline, Searchbar } from "react-native-paper";
import Constants from "expo-constants";

import theme from "../../../theme";

const ProductHeader = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <View style={styles.productHeader}>
      <View>
        <Headline style={styles.whiteColor}>Products</Headline>
        <Caption style={[styles.whiteColor, styles.subHeading]}>
          New Products List
        </Caption>
      </View>
      <Searchbar
        placeholder="Enter product code to search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.search}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productHeader: {
    backgroundColor: theme.colors.accent,
    paddingTop: Constants.statusBarHeight + 15,
    paddingHorizontal: 24,
    paddingVertical: 10,
    justifyContent: "space-between",
    elevation: 20,
  },
  subHeading: {
    opacity: 0.5,
    marginTop: -5,
  },
  whiteColor: {
    color: "#fff",
  },
  search: {
    marginVertical: 10,
  },
});
export default ProductHeader;
