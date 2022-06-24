import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function icon({
  name,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 4,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Ionicons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}

export default icon;
