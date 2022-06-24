import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialIcons
          name={icon}
          size={25}
          color={colors.dark}
          style={styles.icon}
        />
      )}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  textInput: {
    fontSize: 18,
    fontFamily: "Montserrat_500Medium",
  },
  icon: {
    marginHorizontal: 10,
    alignItems: "center",
  },
});

export default AppTextInput;
