import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../config/colors";
import Icon from "../components/Icon";

function WelcomeName({ title, subtitle, image }) {
  return (
    <SafeAreaView>
      <View style={styles.containerParent}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View style={styles.textsTitle}>
            <Text style={styles.titleStyle}>{title}</Text>
            <Text style={styles.subtitleStyle}>{subtitle}</Text>
          </View>
        </View>
        <View>
          <Icon
            name="settings"
            size={45}
            backgroundColor="white"
            iconColor="gray"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  containerParent: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    marginRight: 10,
  },
  textsTitle: {
    justifyContent: "center",
    paddingLeft: 10,
  },
  titleStyle: {
    fontSize: 12,
    color: colors.dark,
    fontFamily: "Montserrat_400Regular",
  },
  subtitleStyle: {
    fontSize: 20,
    color: colors.black,
    fontWeight: "500",
    fontFamily: "Montserrat_500Medium",
  },
});

export default WelcomeName;
