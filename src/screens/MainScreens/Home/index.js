import React from "react";
import { StyleSheet, View, Dimensions, ScrollView } from "react-native";
import { Subheading } from "react-native-paper";

import HomeHeader from "./HomeHeader";
import InfoCard from "./InfoCard";
import ProductCard from "../../../components/ui/ProductCard";
import { PrimaryButton } from "../../../components/ui/Button";
import theme from "../../../theme";
import DeviceStatusBar from "../../../components/utils/StatusBar";

const HomeScreen = () => {
  return (
    <>
      <DeviceStatusBar />
      <HomeHeader />
      <View style={styles.body}>
        <View style={styles.infoContainer}>
          <InfoCard icon="zap" count={20} boxText="New Feature Requests" />
          <InfoCard icon="inbox" count={50} boxText="New Votes Received" />
        </View>
        <Subheading style={styles.cardHeading}>My Products</Subheading>
        <ScrollView style={styles.cardContainer}>
          <ProductCard
            name="PeerUp"
            url="https://peerup.online"
            cover="https://picsum.photos/700"
            featureCount={12}
            completedCount={4}
            requestCount={2}
            voteCount={30}
            date="12-Sept-21"
          />
          <ProductCard
            name="PeerUp"
            url="https://peerup.online"
            cover="https://picsum.photos/700"
            featureCount={12}
            completedCount={4}
            requestCount={2}
            voteCount={30}
            date="12-Sept-21"
          />
          <ProductCard
            name="PeerUp"
            url="https://peerup.online"
            cover="https://picsum.photos/700"
            featureCount={12}
            completedCount={4}
            requestCount={2}
            voteCount={30}
            date="12-Sept-21"
          />
        </ScrollView>
        <PrimaryButton mode="outlined">Add New Product</PrimaryButton>
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
  cardHeading: {
    marginTop: 24,
    marginBottom: 10,
  },
  cardContainer: {
    backgroundColor: "#182C6119",
    padding: 5,
    borderRadius: 8,
    maxHeight: Dimensions.get("window").height / 2,
    marginBottom: 15,
  },
  whiteColor: {
    color: "#fff",
  },
});
