import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import DrawerTrigger from "./DrawerTrigger";

class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent={true} />
        <DrawerTrigger />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    position: "relative",
    top: Dimensions.get('window').height * 0.05 ,
    height: Dimensions.get('window').height * 0.1,
    width:"100%",
    backgroundColor: 'white'
  },
});

export default Header;
