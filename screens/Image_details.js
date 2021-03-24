import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions
} from "react-native";

var count = 0;
export default function ImageDetails(Props) {
  const [images, setimages] = useState(Props.navigation.getParam("SelectedImage"));
  return (
    <FlatList
      data={images}
      numColumns={1}
      contentContainerStyle={styles.homescreen}
      keyExtractor={(item) => item.id.toString()}
      renderItem={(item) => loadImage( item)}
    />
  );
}

loadImage = (item) => {
      return (
        <View style={styles.homescreen}>
          <Image
            source={item.item.url}
            style={{
              width: Dimensions.get("window").width * 0.99,
              height: Dimensions.get("window").height * 0.73,
              borderWidth: 2,
              borderColor: "white",
              resizeMode: "cover",
              marginVertical: Dimensions.get("window").width * 0.02,
              marginHorizontal: Dimensions.get("window").width * 0.02,
            }}
          />
          <Text>
            Miniature Description
          </Text>
          
        </View>
      );}


const styles = StyleSheet.create({
  homescreen: {
    position: "relative",
    width: Dimensions.get("window").width,
    alignItems: "center",
    alignSelf: 'center',
    justifyContent: "center",
  },
});

