import React from "react";
import { View, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";

function AddIncome(props) {
  return (
    <Screen>
      <AppTextInput placeholder="Email" icon="email" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AddIncome;
