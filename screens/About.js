import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {createStackNavigator} from 'react-navigation-stack';
import About from '../screens/About'

const About = (props) => {
  return (
    <View style={styles.homescreen}>
      <Text>About</Text>
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

export default About;
