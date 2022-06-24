import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../config/colors";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

function ListTransaction({
  name,
  size = 50,
  Linearbackground = "#ff00d4",
  Linearbackground2 = "#00ddff",
  Linearbackground3 = "#fbb040",
  iconColor = "#fff",
  title,
  subtitle,
  DateTransac,
}) {
  return (
    <View style={styles.containerParent}>
      <View style={styles.container}>
        <LinearGradient
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            justifyContent: "center",
            alignItems: "center",
          }}
          colors={[Linearbackground, Linearbackground2, Linearbackground3]}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 1, y: 3 }}
        >
          <Ionicons name={name} color={iconColor} size={size * 0.5} />
        </LinearGradient>
        <View style={styles.textsTitle}>
          <Text style={styles.titleStyle}>{title}</Text>
        </View>
      </View>
      <View style={{ marginHorizontal: 10, alignItems: "flex-end" }}>
        <Text style={styles.subtitleStyle}>{subtitle}</Text>
        <Text style={styles.subtitleSecondStyle}>{DateTransac}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  containerParent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
    marginTop: 10,
    padding: 10,
    marginBottom: 10,
    paddingVertical: 20,
    borderRadius: 12,
    shadowColor: "grey",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  container: {
    flexDirection: "row",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  textsTitle: {
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.black,
    fontFamily: "Montserrat_500Medium",
  },
  subtitleStyle: {
    fontSize: 15,
    color: colors.black,
    fontFamily: "Montserrat_400Regular",
  },
  subtitleSecondStyle: {
    fontSize: 15,
    color: colors.dark,
    fontFamily: "Montserrat_400Regular",
  },
});

export default ListTransaction;
