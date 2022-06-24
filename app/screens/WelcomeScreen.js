import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  Dimensions,
} from "react-native";
import App from "../../App";
import AppText from "../components/AppText";

function welcomescreen(props) {
  console.log(getWidth());
  return (
    <ImageBackground
      style={styles.background}
      resizeMode="cover"
      source={require("../assets/bgpng.png")}
    >
      <View style={styles.logoCotainer}>
        <AppText>Monitor Your Daily Expenses Easy and Quickly</AppText>
        <Image style={styles.logo} source={require("../assets/6143.png")} />
      </View>
      <View style={styles.logbtn}></View>
      <View style={styles.regbtn}></View>
    </ImageBackground>
  );
}
function getWidth() {
  let width = Dimensions.get("window").width;
  width = width - 100;
  return width / 5;
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    zIndex: 0,
  },
  logoCotainer: {
    position: "absolute",
    top: 120,
  },
  logbtn: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  regbtn: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
});
export default welcomescreen;
