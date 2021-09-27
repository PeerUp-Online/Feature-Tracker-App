import { DefaultTheme, configureFonts } from "react-native-paper";
import fontConfig from "./fontConfig";

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    primary: "#1B9CFC",
    accent: "#182C61",
    text: "#182C61",
  },
};

export default theme;
