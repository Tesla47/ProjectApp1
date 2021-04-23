import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import Header from "../components/Header";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Header />
        </View>
        <View style={styles.homescreen}>
          <Text>
            These miniatures are some of the most glorious manifestations of
            today Afghanistan’s cultural legacy and also that of Pakistan,
            Uzbekistan, Tajikistan, India and Iran, hence the need to make them
            available to the widest possible audience, which will become a
            reality through the proposed applications.
          </Text>
          <Text> ___________________________________________________ </Text>
        </View>
        <View style={styles.bottomButton}>
          <Icon.Button
            name="chevron-down"
            size={30}
            backgroundColor="#ffa500"
            onPress={() => {}}
          ></Icon.Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homescreen: {
    paddingTop: 60,
    backgroundColor: "white",
    marginHorizontal: 5,
  },
  bottomButton: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 36,
  },
});
