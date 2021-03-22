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


export default function ImageDetails(Props) {
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
    if(id === item.item.id)
    {
      return (
        <View>
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
            keyExtractor={(item) => item.item.id.toString()}
          />
          <Text>All Image Content</Text>
        </View>
      );}
}

const styles = StyleSheet.create({
  homescreen: {
    width: Dimensions.get("window").width,
    alignItems: "center",
    justifyContent: "center",
  },
});
