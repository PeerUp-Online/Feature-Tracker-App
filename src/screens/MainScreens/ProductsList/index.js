import React from "react";
import { StatusBar } from "react-native";
import theme from "../../../theme";

const ProductsList = () => {
  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.accent}
        barStyle="light-content"
      />
    </>
  );
};

export default ProductsList;
