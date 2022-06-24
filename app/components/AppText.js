import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../config/colors";

function AppText({
  fontSize = 15,
  color = "white",
  fontFamily = "Montserrat_400Regular",
  fontWeight = "normal",
  paddingVertical = 0,
  children,
}) {
  return (
    <Text style={{ fontSize, color, fontFamily, fontWeight, paddingVertical }}>
      {children}
    </Text>
  );
}

export default AppText;
