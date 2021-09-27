import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Nunito_900Black as nunitoBlack,
  Nunito_300Light as nunitoLight,
  Nunito_600SemiBold as nunitoSemiBold,
} from "@expo-google-fonts/nunito";

import theme from "./src/theme";
import AppNavigation from "./src/navigation";

const App = () => {
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
      <AppNavigation />
    </PaperProvider>
  );
};

export default App;
