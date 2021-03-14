import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import ChooseMiniature from "./ChosenMiniatureScreen";
import Card from "../components/card";

const HomeScreen = (props) => {
  // console.log(props)
  return (
    <View style={styles.homescreen}>
      <Text>Home</Text>
      <Button
        title="Chose Miniature"
        onPress={() => {
          props.navigation.navigate({
            routeName: "ChosenMiniature",
          });
        }}
      />
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/pic_one.jpg")}
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
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: '80%',
    height: 300,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "white",
    overflow: 'hidden',
    marginVertical: 30
  },
  image_prop: {
    width: "100%",
    height: 400,
  },
});

export default HomeScreen;
