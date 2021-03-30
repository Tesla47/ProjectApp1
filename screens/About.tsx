import React, { Component, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render (){
    return (
      <View style={styles.homescreen}>
        <Text>About</Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  homescreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

