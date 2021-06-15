import React, { Component, useState } from "react";
import { NavigationStackProp } from "react-navigation-stack";
import {
  Button,
  StyleSheet,
  Text,
  View,
  
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { NavigationContext } from "react-navigation";
import Header from "../components/Header";

interface Props {
  navigation: NavigationStackProp;
}

interface State {}

export default class CategoryChosen extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Header />
        </View>
        <View style={styles.buttonRow}>
          <Icon.Button
            name="coffee"
            raised={true}
            backgroundColor="#ffa500"
            // padding={15}
            paddingLeft={8}
            paddingRight={8}
            size={30}
            onPress={() => {
              console.log("button pressed nothing happened")
              //("https://www.buymeacoffee.com/splendor");
            }}
          >
            <Text style={{ fontSize: 15 }}>Buy Us a Coffee</Text>
          </Icon.Button>
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonRow: {
    width: "45%",
    marginTop: 99,
    justifyContent: "center",
    flexDirection: "column",
    alignContent: "center",
    alignSelf: "center",
  },
});