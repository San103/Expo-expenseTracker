import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import AppText from "../components/AppText";
import colors from "../config/colors";
import WelcomeName from "../Home/WelcomeName";
import ListTransaction from "../Home/ListTransaction";
import Screen from "../components/Screen";

const listTransac = [
  {
    id: 1,
    title: "Food",
    name: "fast-food",
    Linearbackground2: "#ef4136",
    Linearbackground: "#fbb040",
    subtitle: "-$ 400.00",
    DateTransac: "Today",
  },
  {
    id: 2,
    title: "Clothes",
    name: "shirt",
    Linearbackground2: "#00a1ff",
    Linearbackground: "#00ff8f",
    subtitle: "-$ 100.00",
    DateTransac: "Today",
  },
];
function IncomeExpenses(props) {
  const [refreshing, setRefreshing] = useState(false);
  return (
    <Screen>
      <WelcomeName
        image={require("../assets/man.png")}
        title="Welcome"
        subtitle="San Palban"
      />
      <LinearGradient
        style={styles.parentContainer}
        colors={["#ff00d4", "#00ddff", "#fbb040"]}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 1, y: 3 }}
      >
        <View style={styles.balanceContainer}>
          <AppText fontSize={15}>Total Balance</AppText>
          <AppText
            paddingVertical={10}
            fontSize={30}
            fontFamily="Montserrat_600SemiBold"
            fontWeight="600"
          >
            $ 12000.00
          </AppText>
        </View>
        <View style={styles.parentIncomeContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 50,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign name="arrowdown" color="#25F333" size={30 * 0.5} />
            </View>
            <View style={{ marginLeft: 10 }}>
              <AppText fontSize={12}>Income</AppText>
              <AppText fontFamily="Montserrat_500Medium">$ 2000.00</AppText>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 50,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign name="arrowup" color="#FB5D5D" size={30 * 0.5} />
            </View>
            <View style={{ marginLeft: 10 }}>
              <AppText fontSize={12}>Expenses</AppText>
              <AppText fontFamily="Montserrat_500Medium">$ 8000.00</AppText>
            </View>
          </View>
        </View>
      </LinearGradient>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 5,
          }}
        >
          <AppText color="gray" fontFamily="Montserrat_600SemiBold">
            Transactions
          </AppText>
          <AppText color="gray" fontSize={12}>
            View All
          </AppText>
        </View>
        <View style={{ marginTop: 15 }}>
          <FlatList
            data={listTransac}
            keyExtractor={(listTransac) => listTransac.id.toString()}
            renderItem={({ item }) => (
              <ListTransaction
                title={item.title}
                name={item.name}
                Linearbackground2={item.Linearbackground2}
                Linearbackground={item.Linearbackground}
                subtitle={item.subtitle}
                DateTransac={item.DateTransac}
              />
            )}
            refreshing={refreshing}
            onRefresh={() => {}}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    color: colors.dark,
    fontFamily: "Montserrat_400Regular",
  },
  parentContainer: {
    flexDirection: "column",
    borderRadius: 20,
    marginVertical: 40,
    shadowColor: "grey",
    shadowOpacity: 0.05,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    elevation: 8,
  },
  balanceContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
  },
  parentIncomeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
});

export default IncomeExpenses;
