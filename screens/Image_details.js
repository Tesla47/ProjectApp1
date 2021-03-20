import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ProgressViewIOSComponent,
  Alert,
} from "react-native";

export default function ImageDetails(Props) {
  var imagesUrl = [
    { url: "../assets/pic_one.jpg", id: 1 },
    { url: "../assets/pic_two.jpg", id: 2 },
    { url: "../assets/pic_three.jpg", id: 3 },
    { url: "../assets/pic_four.jpg", id: 4 },
    { url: "../assets/pic_five.jpg", id: 5 },
    { url: "../assets/pic_six.jpg", id: 6 },
  ];
  var ids = Props.navigation.getParam("Id");
  const [images, setimages] = useState(Props.navigation.getParam("allImages"));

  return (
    <FlatList
      data={images}
      key={"2"}
      numColumns={1}
      contentContainerStyle={styles.homescreen}
      renderItem={( item ) => loadImage(ids,item)}
    />
  );
}

loadImage = (id,item) => {
    console.log(id,item.item.id)
    if(id === item.item.id)
    {
      return (
          <Image
            source={item.item.url}
            style={{
              width: Dimensions.get("window").width * 0.99  ,
              height: Dimensions.get("window").height * 0.73,
              borderWidth: 2,
              borderColor: "white",
              resizeMode: "cover",
              marginVertical: Dimensions.get("window").width * 0.02,
              marginHorizontal: Dimensions.get("window").width * 0.02,
            }}
            keyExtractor={(item) => item.id}
          />
      )}
}

const styles = StyleSheet.create({
  homescreen: {
    width: Dimensions.get("window").width,
    alignItems: "center",
    justifyContent: "center",
  },
});
