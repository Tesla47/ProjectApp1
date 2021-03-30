import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SplashScreen = (props) => {
  return (
    <View style={styles.homescreen}>
      <Text>Splash Screen</Text>
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

export default SplashScreen;
