import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";


const Categories = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Header />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homescreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Categories;
