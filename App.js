import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Nunito_900Black as nunitoBlack,
  Nunito_300Light as nunitoLight,
  Nunito_600SemiBold as nunitoSemiBold,
} from "@expo-google-fonts/nunito";

import theme from "./src/theme";

export default function App() {
  let [fontsLoaded] = useFonts({
    nunitoBlack,
    nunitoSemiBold,
    nunitoLight,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Text style={{ fontFamily: "nunitoBlack" }}>
          Open up App.js to start working on your app!
        </Text>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
