import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import BackButtonTrigger from "./BackButtonTrigger";

class BackHeader extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent={true}
        />
        <BackButtonTrigger />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    position: "relative",
    top: Dimensions.get("window").height * 0.05,
    height: undefined,
    width: "100%",
    backgroundColor: "white",
    shadowRadius: 6,
    elevation: 8,
    padding: 5,
    borderRadius: 10,
  },
});

export default BackHeader;
