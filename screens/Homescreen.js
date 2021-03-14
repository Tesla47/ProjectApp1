import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import ChooseMiniature from "./ChosenMiniatureScreen";
import Card from "../components/card";

const HomeScreen = (props) => {
  // console.log(props)
  return (
    <View style={styles.homescreen}>
      {/* <Text>Home</Text>
      <Button
        title="Chose Miniature"
        onPress={() => {
          props.navigation.navigate({
            routeName: "ChosenMiniature",
          });
        }}
      /> */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/pic_one.jpg")}
          style={styles.image_prop}
          resizeMode="cover"
        />
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/pic_two.jpg")}
          style={styles.image_prop}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homescreen: {
    flex: 0.5,
    justifyContent: "flex-start",
    alignItems: "baseline",

  },
  
  imageContainer: {
    width: '50%',
    height: '70%',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "white",
    overflow: 'hidden',
    marginVertical: 10,
    // flexDirection: 'row',
    // flexWrap: 'wrap'
  
  },
  image_prop: {
    width: "100%",
    height: '100%',
  },
});

export default HomeScreen;
