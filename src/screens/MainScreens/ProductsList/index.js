import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import ProductHeader from "./ProductHeader";
import ProductCard from "../../../components/ui/ProductCard";
import DeviceStatusBar from "../../../components/utils/StatusBar";
import theme from "../../../theme";

const ProductsList = () => {
  return (
    <>
      <DeviceStatusBar />
      <ProductHeader />
      <ScrollView style={styles.body}>
        <ProductCard
          name="PeerUp"
          url="https://peerup.online"
          cover="https://picsum.photos/700"
          featureCount={12}
          completedCount={4}
          requestCount={2}
          voteCount={30}
          date="12-Sept-21"
          elevation={4}
        />
        <ProductCard
          name="APPX Technologies"
          url="https://appxtechnologies.com"
          cover="https://picsum.photos/700"
          featureCount={12}
          completedCount={4}
          requestCount={2}
          voteCount={30}
          date="12-Sept-21"
          elevation={4}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 6,
  },
});

export default ProductsList;
