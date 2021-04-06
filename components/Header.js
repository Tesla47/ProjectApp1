import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import DrawerTrigger from "./DrawerTrigger";

class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <StatusBar
          barStyle="white-content"
          backgroundColor="transparent"
          translucent={true}
        />
        <View style={styles.headerStyling}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Afghanistan's Medieval Art
          </Text>
        </View>
        <View style={{width:40,height:40}}>
          <DrawerTrigger />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    position: "relative",
    top: Dimensions.get("window").height * 0.04,
    height: undefined,
    width: "100%",
    backgroundColor: "white",
    shadowRadius: 6,
    elevation: 8,
    padding: 8,
    borderRadius: 2,
    
  },
  headerStyling: {
    alignItems: "center",
    alignContent: "center",
    position: 'absolute',
    margin: 13,
    alignSelf: "center",
    justifyContent: "center",
    flex:1
  },
});

export default Header;
