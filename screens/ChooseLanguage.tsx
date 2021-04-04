import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ChooseLanguage = (props) => {
  return (
    <View style={styles.homescreen}>
      <Text>Choose a Language</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homescreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChooseLanguage;
